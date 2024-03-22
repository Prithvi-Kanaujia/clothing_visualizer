import React = require('react')

import classes from './Shades.module.scss'

type ShadesProps = {
  shades: Array<{ id: number, color: string }>
  selectedId: number
  onChange: (id: number) => void
}

function Shades(props: ShadesProps) {
  return (
    <div className={classes.shades}>
      {props.shades.map((shade) => (
        <div
          key={shade.id}
          className={`${classes.shade} ${props.selectedId === shade.id ? classes.active : ''
            } to-center`}
          onClick={() => {
            props.onChange(shade.id)
          }}
        >
          <div
            style={{
              backgroundColor: shade.color
            }}
            className={`${classes.shadee}`}
          />
        </div>
      ))}
    </div>
  )
}

export default Shades
