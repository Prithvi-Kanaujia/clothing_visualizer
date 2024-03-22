import React from 'react'

import classes from './ImageTextButton.module.scss'
interface inProps {
  icon: string
  text: string
  onClick: () => void
  style: React.CSSProperties
}
const ImageTextButton = (props: inProps) => {
  const { icon, text, onClick, style } = props
  return (
    <button
      className={`${classes.button} to-center`}
      onClick={() => {
        onClick?.()
      }}
      style={style}
    >
      <img src={icon} />
      <span>{text}</span>
    </button>
  )
}

export default ImageTextButton
