import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const getMediaQueryPreference = () => {
      const mediaQuery = '(prefers-color-scheme: dark)'
      const mql = window.matchMedia(mediaQuery)
      const hasPreference = typeof mql.matches === 'boolean'

      if (hasPreference) {
        return mql.matches ? 'dark' : 'light'
      }
    }

    const userSetPreference = localStorage.getItem('theme')
    if (userSetPreference !== null) {
      setDarkMode(userSetPreference === 'dark')
    } else {
      const mediaQueryPreference = getMediaQueryPreference()
      setDarkMode(mediaQueryPreference === 'dark')
    }
  }, [])

  useEffect(() => {
    if (typeof darkMode !== 'undefined') {
      const userPreference = darkMode ? 'dark' : 'light'
      localStorage.setItem('theme', userPreference)
    }
  }, [darkMode])

  return darkMode
}
