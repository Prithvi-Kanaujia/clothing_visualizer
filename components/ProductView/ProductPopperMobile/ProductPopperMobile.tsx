import { Typography } from 'antd'
import {
  CartIcon,
  ExpandIcon,
  HeartFavIcon,
  LeftArrowIcon,
  RightArrowIcon
} from 'components/Icons/EditorViewIcons'
import { LinkButton } from 'components/shared/Buttons/Buttons'
import Popover from 'components/shared/Popover/Popover'
import React from 'react'
import { assetUrl } from 'utils/constants'

import classes from './ProductpopperMobile.module.scss'

type ProductViewPropsMobile = {
  setIsProductViewOpen: (value: boolean) => void
  setProductPopper: (value: boolean) => void
  setproductDetails: (value: boolean) => void
  isOpen: boolean
}

export const ProductPopperMobile = ({
  isOpen,
  setProductPopper,
  setIsProductViewOpen,
  setproductDetails
}: ProductViewPropsMobile) => {
  return (
    <Popover
      isOpen={isOpen}
      onClose={() => {
        setIsProductViewOpen(false)
      }}
      withCloseIcon={false}
      contentClassName="product-popper-mobile"
    >
      <div className={classes['heading-text-img']}>
        <img width={50} height={50} src={`${assetUrl}/images/prodimg.png`} />
        <div
          className={classes['exp-icon']}
          onClick={() => {
            setProductPopper(true)
            setIsProductViewOpen(false)
          }}
        >
          <ExpandIcon />
        </div>
        <div className={classes['heading-text']}>
          <Typography style={{ fontSize: '12px', color: 'white' }}>
            Zoya
          </Typography>
          <Typography style={{ fontSize: '10px', color: '#CECECE' }}>
            Zoya Charming Gold and emerald diamond earring TRY-ON
          </Typography>
        </div>
        <div className={classes.icon}>
          <HeartFavIcon />
        </div>
      </div>
      <div className={classes['view-details-btn']}>
        <div
          onClick={() => {
            setproductDetails(true)
            setIsProductViewOpen(false)
          }}
          className={classes['arrow-text']}
        >
          <Typography style={{ fontSize: '12px', color: 'white' }}>
            View Details
          </Typography>
          <RightArrowIcon />
        </div>
        <div className={classes['btn-div']}>
          <LinkButton className={classes['secondary-button']}>
            TRY-ON
          </LinkButton>
          <LinkButton className={classes['primary-button']}>
            <CartIcon /> ADD
          </LinkButton>
        </div>
      </div>
    </Popover>
  )
}

export default ProductPopperMobile
