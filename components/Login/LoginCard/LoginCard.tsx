import { RightArrowIcon } from 'components/Icons/GenericIcons'
import HeadingSub from 'components/shared/HeadingSub/HeadingSub'
import React from 'react'

import classes from './LoginCard.module.scss'

export interface ILoginCardProps {
  showArrow: boolean
}

export const LoginCard = ({ showArrow }: ILoginCardProps) => {
  return (
    <div className={classes.cardbox}>
      <HeadingSub
        heading="Register"
        subheading="Lorem ipsum dolor sit amet, consec tetur adipiscing elit.  ipsum dolor sit amet, "
      />
      {showArrow && (
        <div className={`${classes.circlecut} to-center`}>
          <RightArrowIcon />
        </div>
      )}
    </div>
  )
}

export const CardSet = () => {
  return (
    <div className={`${classes.cardset} to-center`}>
      <LoginCard showArrow={true} />
      <LoginCard showArrow={true} />
      <LoginCard showArrow={false} />
    </div>
  )
}
