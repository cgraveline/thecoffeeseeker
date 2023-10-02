import { FC, useContext } from 'react'
import style from '../styles/ThemeToggle.module.scss'
import { ThemeContext } from './ThemeContext'

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <label>
      <input type="checkbox" />
      <span className={style.slider} onClick={toggleTheme}>
        {theme === 'light' ? '🌚' : '🌞'}
      </span>
    </label>
  )
}
