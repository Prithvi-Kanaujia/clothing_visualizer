import React from 'react'

import classes from './Typography.module.scss'
export interface ITypographyPrimaryProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subTitle?: string
}
export const TypographyPrimary = ({
  title,
  subTitle,
  className
}: ITypographyPrimaryProps) => {
  return (
    <div
      className={`${classes['typography-primary']} ${
        className ?? ''
      } v-to-center`}
    >
      {title && <h2>{title}</h2>}
      {subTitle && <h3>{subTitle}</h3>}
    </div>
  )
}
