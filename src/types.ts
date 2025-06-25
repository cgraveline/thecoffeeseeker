export interface CoffeeShop {
  title: string
  website: string
  directions: string
  address: string
  latitude?: number
  longitude?: number
  state?: string
  city?: string
  description?: { raw?: any } | null
  rating?: number
  priceRange?: string
  specialties?: string[]
}

export interface CoffeeShops {
  coffeeShops: CoffeeShop[]
}

export interface Location {
  state: string
  cities: string[]
}

export interface FilterState {
  selectedState: string
  selectedCity: string
  searchQuery: string
}
