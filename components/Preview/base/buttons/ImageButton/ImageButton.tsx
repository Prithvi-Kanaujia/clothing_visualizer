import React from 'react'

import classes from './ImageButton.module.scss'
interface inProps {
  icon: string
  onClick: () => void
  style: React.CSSProperties
}
const ImageButton = (props: inProps) => {
  const { icon, onClick, style } = props
  return (
    <button
      className={`${classes.button} to-center`}
      onClick={() => {
        onClick?.()
      }}
      style={style}
    >
      <img src={icon} />
    </button>
  )
}

export default ImageButton
