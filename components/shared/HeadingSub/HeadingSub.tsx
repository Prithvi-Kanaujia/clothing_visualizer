import React from 'react'

import classes from './HeadingSub.module.scss'

export interface InHeadingProps {
  heading: string
  subheading: string
  classname?: string
}

const HeadingSub = ({ heading, subheading, classname }: InHeadingProps) => {
  return (
    <div className={`${classname} ${classes.wrapper}`}>
      <div className={`${classname} ${classes.heading}`}>{heading} </div>
      <div className={`${classname} ${classes.subheading}`}>{subheading} </div>
    </div>
  )
}

export default HeadingSub
