import { FC, useState, useEffect } from 'react'
import { CoffeeShop, Location, FilterState } from '../types'
import styles from '../styles/Filter.module.scss'

interface FilterProps {
  coffeeShops: CoffeeShop[]
  onFilterChange: (filteredShops: CoffeeShop[]) => void
}

export const Filter: FC<FilterProps> = ({ coffeeShops, onFilterChange }) => {
  const [filters, setFilters] = useState<FilterState>({
    selectedState: '',
    selectedCity: '',
    searchQuery: '',
  })

  const [locations, setLocations] = useState<Location[]>([])
  const [availableCities, setAvailableCities] = useState<string[]>([])

  // Extract unique states and cities from coffee shops
  useEffect(() => {
    const stateMap = new Map<string, Set<string>>()

    coffeeShops.forEach((shop) => {
      if (shop.state) {
        if (!stateMap.has(shop.state)) {
          stateMap.set(shop.state, new Set())
        }
        if (shop.city) {
          stateMap.get(shop.state)!.add(shop.city)
        }
      }
    })

    const locationData: Location[] = Array.from(stateMap.entries()).map(
      ([state, cities]) => ({
        state,
        cities: Array.from(cities).sort(),
      })
    )

    setLocations(locationData)
  }, [coffeeShops])

  // Update available cities when state changes
  useEffect(() => {
    if (filters.selectedState) {
      const selectedLocation = locations.find(
        (loc) => loc.state === filters.selectedState
      )
      setAvailableCities(selectedLocation?.cities || [])

      // Reset city selection if it's not available in the new state
      if (
        selectedLocation &&
        !selectedLocation.cities.includes(filters.selectedCity)
      ) {
        setFilters((prev) => ({ ...prev, selectedCity: '' }))
      }
    } else {
      setAvailableCities([])
      setFilters((prev) => ({ ...prev, selectedCity: '' }))
    }
  }, [filters.selectedState, locations])

  // Apply filters
  useEffect(() => {
    let filtered = coffeeShops

    // Filter by state
    if (filters.selectedState) {
      filtered = filtered.filter((shop) => shop.state === filters.selectedState)
    }

    // Filter by city
    if (filters.selectedCity) {
      filtered = filtered.filter((shop) => shop.city === filters.selectedCity)
    }

    // Filter by search query
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase()
      filtered = filtered.filter(
        (shop) =>
          shop.title.toLowerCase().includes(query) ||
          shop.address.toLowerCase().includes(query) ||
          (shop.description &&
            shop.description.toLowerCase().includes(query)) ||
          (shop.specialties &&
            shop.specialties.some((specialty) =>
              specialty.toLowerCase().includes(query)
            ))
      )
    }

    onFilterChange(filtered)
  }, [filters, coffeeShops, onFilterChange])

  const handleStateChange = (state: string) => {
    setFilters((prev) => ({ ...prev, selectedState: state }))
  }

  const handleCityChange = (city: string) => {
    setFilters((prev) => ({ ...prev, selectedCity: city }))
  }

  const handleSearchChange = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }))
  }

  const clearFilters = () => {
    setFilters({
      selectedState: '',
      selectedCity: '',
      searchQuery: '',
    })
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Search coffee shops..."
          value={filters.searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.locationSection}>
        <select
          value={filters.selectedState}
          onChange={(e) => handleStateChange(e.target.value)}
          className={styles.select}
          aria-label="Select state"
        >
          <option value="">All States</option>
          {locations.map((location) => (
            <option key={location.state} value={location.state}>
              {location.state}
            </option>
          ))}
        </select>

        <select
          value={filters.selectedCity}
          onChange={(e) => handleCityChange(e.target.value)}
          className={styles.select}
          disabled={!filters.selectedState}
          aria-label="Select city"
        >
          <option value="">All Cities</option>
          {availableCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button onClick={clearFilters} className={styles.clearButton}>
          Clear Filters
        </button>
      </div>
    </div>
  )
}
