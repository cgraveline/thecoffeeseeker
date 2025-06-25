import { FC, PropsWithChildren } from 'react'
import style from '../styles/Card.module.scss'

interface CardProps extends PropsWithChildren {
  isSelected?: boolean
  onClick?: () => void
}

export const Card: FC<CardProps> = ({
  children,
  isSelected = false,
  onClick,
}) => {
  return (
    <div
      className={`${style.card} ${isSelected ? style.selected : ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
