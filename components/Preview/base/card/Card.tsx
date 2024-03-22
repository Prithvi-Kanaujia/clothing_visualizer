import { closeIcon } from 'assets'
import React from 'react'

import classes from './Card.module.scss'

export interface CardProps {
  onClose: () => void
  children?: React.ReactNode
  style: React.CSSProperties
}

const Card = ({ children, style, onClose }: CardProps) => {
  return (
    <div className={classes.card} style={style}>
      <div
        className={classes.close}
        onClick={() => {
          onClose?.()
        }}
      >
        <img src={closeIcon} />
      </div>
      {children}
    </div>
  )
}

export default Card
