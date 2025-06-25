import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'
import { FC } from 'react'
import { Card } from '../components/Card'
import { Map } from '../components/Map'
import { Filter } from '../components/Filter'
import { CoffeeShop, CoffeeShops } from '../types'
import { GetStaticProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import { ThemeToggle } from '../components/ThemeToggle'
import { ThemeContext } from '../components/ThemeContext'
import { RichText } from '@graphcms/rich-text-react-renderer'

export const getStaticProps: GetStaticProps = async () => {
  const endpoint =
    'https://api-us-east-1.hygraph.com/v2/clcjt8ric0ogl01ughxd0esvh/master'

  const QUERY = gql`
    {
      coffeeShops {
        title
        website
        directions
        address
        latitude
        longitude
        state
        city
        description {
          raw
        }
        rating
        priceRange
        specialties
      }
    }
  `

  try {
    const client = new GraphQLClient(endpoint)
    const { coffeeShops } = await client.request<CoffeeShops>(QUERY)

    return {
      props: {
        coffeeShops,
      },
    }
  } catch (error) {
    console.error('Error retrieving data from the API:', error)
    return {
      props: {
        coffeeShops: [],
      },
    }
  }
}

export const Home: FC<{ coffeeShops: CoffeeShop[] }> = ({ coffeeShops }) => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const [filteredShops, setFilteredShops] = useState<CoffeeShop[]>(coffeeShops)
  const [selectedShop, setSelectedShop] = useState<CoffeeShop | null>(null)
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list')

  useEffect(() => {
    setFilteredShops(coffeeShops)
  }, [coffeeShops])

  const handleShopSelect = (shop: CoffeeShop) => {
    setSelectedShop(shop)
  }

  const handleFilterChange = (filtered: CoffeeShop[]) => {
    setFilteredShops(filtered)
    setSelectedShop(null) // Clear selection when filters change
  }

  return (
    <div className="app" data-theme={theme}>
      <Head>
        <title>The Coffee Seeker - Find the Best Coffee Shops</title>
        <meta
          name="description"
          content="Discover the best coffee shops near you with our interactive map and search tools"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <h1>
          <span className={styles.logoText}>The Coffee Seeker</span>☕️
        </h1>
        <ThemeToggle />
      </header>

      <main className={styles.main}>
        <div className={styles.introSection}>
          <h2 className={styles.intro}>Discover the Perfect ☕️ Near You</h2>
          <p className={styles.subtitle}>
            Find the best coffee shops with our interactive map and search tools
          </p>
        </div>

        <Filter coffeeShops={coffeeShops} onFilterChange={handleFilterChange} />

        <div className={styles.viewToggle}>
          <button
            className={`${styles.toggleButton} ${
              viewMode === 'list' ? styles.active : ''
            }`}
            onClick={() => setViewMode('list')}
          >
            📋 List View
          </button>
          <button
            className={`${styles.toggleButton} ${
              viewMode === 'map' ? styles.active : ''
            }`}
            onClick={() => setViewMode('map')}
          >
            🗺️ Map View
          </button>
        </div>

        {viewMode === 'map' ? (
          <div className={styles.mapSection}>
            <Map
              coffeeShops={filteredShops}
              selectedShop={selectedShop}
              onShopSelect={handleShopSelect}
            />
          </div>
        ) : (
          <div className={styles.resultsSection}>
            <div className={styles.resultsHeader}>
              <h3>
                Found {filteredShops.length} coffee shop
                {filteredShops.length !== 1 ? 's' : ''}
              </h3>
            </div>

            <div className={styles.cardWrap}>
              <ul className={styles.cardList}>
                {filteredShops.map((shop: CoffeeShop) => (
                  <li key={shop.title}>
                    <Card
                      isSelected={selectedShop?.title === shop.title}
                      onClick={() => handleShopSelect(shop)}
                    >
                      <div className={styles.shop}>
                        <h3 className={styles.shopTitle}>{shop.title}</h3>
                        <span className={styles.shopAddress}>
                          {shop.address}
                        </span>
                        {shop.description?.raw && (
                          <div className={styles.shopDescription}>
                            <RichText content={shop.description.raw} />
                          </div>
                        )}
                        <div className={styles.shopMeta}>
                          {shop.rating && (
                            <span className={styles.rating}>
                              ⭐ {shop.rating}/5
                            </span>
                          )}
                          {shop.priceRange && (
                            <span className={styles.priceRange}>
                              💰 {shop.priceRange}
                            </span>
                          )}
                        </div>
                        {(() => {
                          const specialties: string[] = Array.isArray(
                            shop.specialties
                          )
                            ? shop.specialties
                            : shop.specialties
                            ? [shop.specialties]
                            : []
                          return specialties.length > 0 ? (
                            <div className={styles.specialties}>
                              <span className={styles.specialtiesLabel}>
                                Specialties:
                              </span>
                              <div className={styles.specialtiesList}>
                                {specialties.map(
                                  (specialty: string, index: number) => (
                                    <span
                                      key={index}
                                      className={styles.specialty}
                                    >
                                      {specialty}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          ) : null
                        })()}
                        <div className={styles.shopLinks}>
                          <Link className={styles.website} href={shop.website}>
                            Website
                          </Link>
                          <Link
                            className={styles.directions}
                            href={shop.directions}
                          >
                            Directions
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home
