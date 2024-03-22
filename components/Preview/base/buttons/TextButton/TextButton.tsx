import React, { useEffect, useState } from 'react'

import classes from './TextButton.module.scss'

interface inProps {
  label: string
  onClick: () => void
  className?: string
}
const TextButton = ({ label, onClick, className }: inProps) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = useState(false)
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      timeout = setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
    return () => {
      clearTimeout(timeout)
    }
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  return (
    <button
      className={`${classes.button} ${className}`}
      onClick={(e: any) => {
        const rect = e.target.getBoundingClientRect()
        setCoords({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
        onClick?.()
      }}
    >
      {isRippling && (
        <span
          className={classes.ripple}
          style={{
            left: coords.x,
            top: coords.y
          }}
        />
      )}
      <span className={classes.content}>{label}</span>
    </button>
  )
}

export default TextButton
