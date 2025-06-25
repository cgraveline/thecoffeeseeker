import { FC, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import { CoffeeShop } from '../types'
import styles from '../styles/Map.module.scss'

// You'll need to get a free Mapbox access token from https://account.mapbox.com/
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || ''

interface MapProps {
  coffeeShops: CoffeeShop[]
  selectedShop?: CoffeeShop | null
  onShopSelect?: (shop: CoffeeShop) => void
}

export const Map: FC<MapProps> = ({
  coffeeShops,
  selectedShop,
  onShopSelect,
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [lng] = useState(-87.6298) // Default to Chicago
  const [lat] = useState(41.8781)
  const [zoom] = useState(10)

  useEffect(() => {
    if (map.current) return // initialize map only once

    if (mapContainer.current) {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [lng, lat],
        zoom: zoom,
      })

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right')
    }
  }, [lng, lat, zoom])

  // Add markers for coffee shops
  useEffect(() => {
    if (!map.current) return

    // Debug log: show all shops and their coordinates
    console.log(
      'Markers to render:',
      coffeeShops.map((s) => ({
        title: s.title,
        lat: s.latitude,
        lng: s.longitude,
      }))
    )

    // Remove existing markers
    const existingMarkers = document.querySelectorAll('.mapboxgl-marker')
    existingMarkers.forEach((marker) => marker.remove())

    // Add new markers
    coffeeShops.forEach((shop) => {
      // Coerce latitude/longitude to numbers if they are strings
      const lat =
        typeof shop.latitude === 'string'
          ? parseFloat(shop.latitude)
          : shop.latitude
      const lng =
        typeof shop.longitude === 'string'
          ? parseFloat(shop.longitude)
          : shop.longitude
      // Only add marker if both are valid numbers
      if (
        typeof lat === 'number' &&
        !isNaN(lat) &&
        typeof lng === 'number' &&
        !isNaN(lng)
      ) {
        const marker = new mapboxgl.Marker({
          color: selectedShop?.title === shop.title ? '#ff6b6b' : '#4ecdc4',
        })
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(`
              <div class="${styles.popup}">
                <h3>${shop.title}</h3>
                <p>${shop.address}</p>
                ${shop.rating ? `<p>⭐ ${shop.rating}/5</p>` : ''}
                ${shop.priceRange ? `<p>💰 ${shop.priceRange}</p>` : ''}
                <a href="${
                  shop.website
                }" target="_blank" rel="noopener noreferrer">Visit Website</a>
              </div>
            `)
          )
          .addTo(map.current!)

        // Add click handler
        marker.getElement().addEventListener('click', () => {
          if (onShopSelect) {
            onShopSelect(shop)
          }
        })
      }
    })
  }, [coffeeShops, selectedShop, onShopSelect])

  // Center map on selected shop
  useEffect(() => {
    if (map.current && selectedShop?.latitude && selectedShop?.longitude) {
      map.current.flyTo({
        center: [selectedShop.longitude, selectedShop.latitude],
        zoom: 15,
        duration: 1000,
      })
    }
  }, [selectedShop])

  return (
    <div className={styles.mapContainer}>
      <div ref={mapContainer} className={styles.map} />
    </div>
  )
}
