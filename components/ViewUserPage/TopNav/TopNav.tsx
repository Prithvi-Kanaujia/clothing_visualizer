import {
  BlackInfoIcon,
  CartIcon,
  HeartFavIcon,
  LeftArrowIcon,
  VolumeOnIcon
} from 'components/Icons/EditorViewIcons'
import { ButtonSecondary } from 'components/shared/Buttons/Buttons'
import React, { useState } from 'react'
import { isMobile } from 'react-device-detect'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectShowVisualizer, setShowVisualizer } from 'store/user-slice'
import { assetUrl } from 'utils/constants'

import classes from './TopNav.module.scss'
import ViewInformation from './ViewInformation/ViewInformation'
import ViewProductsMobile from './ViewProductMobile/ViewProductMobile'
import ViewProducts from './ViewProducts/ViewProducts'

const initialPopupState = {
  info: false,
  cart: false,
  fav: false
}

const TopNav = () => {
  const [openPopups, setOpenPopups] = useState(initialPopupState)
  const showVisualizer = useAppSelector(selectShowVisualizer)
  const dispatch = useAppDispatch()

  function handleOpenPopup(popupType: keyof typeof initialPopupState) {
    setOpenPopups(() => ({
      info: popupType === 'info',
      cart: popupType === 'cart',
      fav: popupType === 'fav'
    }))
  }

  function handleClosePopups() {
    setOpenPopups({
      info: false,
      cart: false,
      fav: false
    })
  }

  const showMobileVisualizer = isMobile && showVisualizer

  return (
    <>
      <div className={`${classes.topnav} to-center`}>
        <div className={`${classes.left} to-center`}>
          {showMobileVisualizer &&
            <div className={classes.exitVisulaizer}>
              <ButtonSecondary onClick={() => {
                dispatch(setShowVisualizer(false))
              }}>
                <LeftArrowIcon />
                <p>Exit Visualise</p>
              </ButtonSecondary>
            </div>
          }
          {!showMobileVisualizer &&
            <>
              <div className={`${classes.logo} to-center`}>
                <img src={`${assetUrl}/images/titansmall.png`} alt="" />
              </div>
              <p className={classes.title}>Karishma’s Style Showroom</p>
              <div
                className={`${classes.info} to-center`}
                onClick={() => handleOpenPopup('info')}
              >
                <BlackInfoIcon
                  {...(!!openPopups.info && {
                    backgroundColor: '#FFFFFF',
                    color: '#000000'
                  })}
                />
              </div>
            </>
          }
        </div>

        <div className={`${classes.right} to-center`}>
          {showVisualizer && (
            <div
              onClick={() => null}
              className={`${classes?.['btn-wrapper']} v-to-center`}
            >
              <VolumeOnIcon />
              <p className={classes?.['btn-title']}>MUTE</p>
            </div>
          )}
          {!showMobileVisualizer && (
            <div
              onClick={() => handleOpenPopup('fav')}
              className={`${classes?.['btn-wrapper']} v-to-center`}
            >
              <HeartFavIcon />
              <p className={classes?.['btn-title']}>FAVOURITE</p>
            </div>
          )}

          <div
            onClick={() => handleOpenPopup('cart')}
            className={`${classes?.['btn-wrapper']} v-to-center`}
          >
            <CartIcon />
            <p className={classes?.['btn-title']}>CART</p>
          </div>
        </div>
      </div>
      {!!openPopups.info && <ViewInformation onClose={handleClosePopups} />}
      {!!openPopups.fav && !isMobile
        ? (
          <ViewProducts onClose={handleClosePopups} type="favourites" />
        )
        : !!openPopups.fav && isMobile
          ? (
            <ViewProductsMobile onClose={handleClosePopups} type="favourites" />
          )
          : null}
      {!!openPopups.cart && !isMobile
        ? (
          <ViewProducts onClose={handleClosePopups} type="cart" />
        )
        : !!openPopups.cart && isMobile
          ? (
            <ViewProductsMobile onClose={handleClosePopups} type="cart" />
          )
          : null}
    </>
  )
}

export default TopNav
