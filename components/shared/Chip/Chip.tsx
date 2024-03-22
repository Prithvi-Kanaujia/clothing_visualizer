import { CrossIcon } from 'components/Icons/GenericIcons'
import React from 'react'

import classes from './Chip.module.scss'

type ChipProps = {
  children: React.ReactNode
}

function Chip(props: ChipProps) {
  return <div className={`${classes.wrapper} to-center`}>
    <p>{props.children}</p>
    <CrossIcon />
  </div>
}

export default Chip
