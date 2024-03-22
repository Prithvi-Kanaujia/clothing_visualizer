import React from 'react'

import classes from './RangeInput.module.scss'

type RangeInputProps = {
  name: string
  id: string
  value: string
  min: string
  max: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function RangeInput(props: RangeInputProps) {
  const $inputRef = React.useRef<HTMLInputElement | null>(null)
  const progress =
    ((+props.value - +props.min) / (+props.max - +props.min)) * 100

  React.useEffect(() => {
    if ($inputRef.current) {
      $inputRef.current.style.background = `linear-gradient(to right, #626cce ${progress}%, #fff ${progress}%)`
    }
  }, [props.value])

  return (
    <div className={classes.input}>
      <input ref={$inputRef} type="range" {...props} />
    </div>
  )
}

export default RangeInput
