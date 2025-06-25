import { FC, useContext } from 'react'
import styles from '../styles/ThemeToggle.module.scss'
import { ThemeContext } from './ThemeContext'

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      aria-label={`Active ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={styles.button}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <span className={styles.moon}>🌚</span>
      ) : (
        <span className={styles.sun}>🌞</span>
      )}
    </button>
  )
}
