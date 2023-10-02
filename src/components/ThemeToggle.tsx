import { FC, useContext } from 'react'
import style from '../styles/ThemeToggle.module.scss'
import { ThemeContext } from './ThemeContext'

interface ThemeToggleProps {}

export const ThemeToggle = (FC<ThemeToggleProps> = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <label>
      <input type="checkbox" />
      <span className={style.slider} onClick={toggleTheme}>
        {theme === 'light' ? '🌚' : '🌞'}
      </span>
    </label>
  )
})
