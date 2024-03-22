import {
  BlackInfoIcon,
  CartIcon,
  HeartFavIcon
} from 'components/Icons/EditorViewIcons'
import React from 'react'
import { assetUrl } from 'utils/constants'

import classes from './UserBar.module.scss'
const UserBar = () => {
  return (
    <div className={`${classes.userbar} to-center`}>
      <div className={`${classes.showroomname} to-center`}>
        <div className={`${classes.imgwrap} to-center`}>
          <img src={`${assetUrl}/images/titansmall.png`} alt="" />
        </div>
        <p>Karishma’s Style Showroom</p>
        <BlackInfoIcon />
      </div>

      <div className={`${classes.sidebtns} to-center`}>
        <div className={`${classes.actionbtn} v-to-center`}>
          <HeartFavIcon />
          FAVORITE
        </div>

        <div className={`${classes.actionbtn} v-to-center`}>
          <CartIcon />
          CART
        </div>
      </div>
    </div>
  )
}

export default UserBar
