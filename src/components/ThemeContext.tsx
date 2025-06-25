import { createContext, FC, PropsWithChildren, useState } from 'react'
import { useDarkMode } from '../utils/ThemePreference'

type Theme = 'light' | 'dark'
type ThemeContext = { theme: Theme; toggleTheme: () => void }

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const darkMode = useDarkMode()
  const [theme, setTheme] = useState<Theme>(darkMode ? 'dark' : 'light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
