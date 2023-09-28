import { FC, PropsWithChildren } from 'react'
import style from '../styles/Card.module.scss'

export const Card: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.card}>{children}</div>
}
