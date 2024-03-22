import { Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import {
  ExpandIcon,
  HeartFavIcon,
  LeftArrowIcon,
  RightArrowIcon
} from 'components/Icons/EditorViewIcons'
import { LinkButton } from 'components/shared/Buttons/Buttons'
import Popover from 'components/shared/Popover/Popover'
import React from 'react'
import { assetUrl } from 'utils/constants'

import classes from './Productview.module.scss'

type ProducrViewProps = {
  setIsProductViewOpen: (value: boolean) => void
  setProductPopper: (value: boolean) => void
  setproductDetails: (value: boolean) => void
  isOpen: boolean
}

const ProductView = ({
  isOpen,
  setProductPopper,
  setIsProductViewOpen,
  setproductDetails
}: ProducrViewProps) => {
  return (
    <>
      <Popover
        contentClassName="product-view-popover"
        isOpen={isOpen}
        onClose={() => {
          setIsProductViewOpen(false)
        }}
        withCloseIcon
      >
        <div className={classes['top-nav']}>
          <LeftArrowIcon />
          <Typography style={{ fontSize: '12px', color: '#FFF' }}>
            {' '}
            1/20 Products{' '}
          </Typography>
          <RightArrowIcon />
        </div>
        <Divider
          style={{ margin: ' 0 0 0 20px', width: '87%' }}
          variant="middle"
        />
        <div className={classes['product-container']}>
          <div className={classes['image-container']}>
            <div>
              <img src={`${assetUrl}/images/prodimg.png`} />
              <div
                onClick={() => {
                  setProductPopper(true)
                  setIsProductViewOpen(false)
                }}
                className={classes['expand-icon']}
              >
                <ExpandIcon />
              </div>
            </div>
            <div className={classes.content}>
              <div className={classes.carousel}>
                <div className={classes.card}>
                  <img src={`${assetUrl}/images/prod-small.png`} />
                </div>
                <div>
                  <img
                    className={classes.card}
                    src={`${assetUrl}/images/product-ear.png`}
                  />
                </div>
                <div className={classes.card}>
                  <img src={`${assetUrl}/images/product-img-2.png`} />
                </div>
                <div className={classes.card}>
                  <img src={`${assetUrl}/images/product-img-2.png`} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes['details-container']}>
            <div className={classes['text-heart']}>
              <Typography style={{ fontSize: '16px', color: 'white' }}>
                Zoya
              </Typography>
              <HeartFavIcon />
            </div>
            <div className={classes['details-sub']}>
              <Typography style={{ fontSize: '14px', color: 'white' }}>
                Charming Gold and emerald diamond earring
              </Typography>
              <Typography
                style={{
                  padding: '10px 0 0 0',
                  fontSize: '14px',
                  color: 'white'
                }}
              >
                ₹ 45,999
              </Typography>
              <div
                onClick={() => {
                  setproductDetails(true)
                  setIsProductViewOpen(false)
                }}
                className={classes['view-details']}
              >
                <Typography style={{ fontSize: '14px', color: 'white' }}>
                  {' '}
                  View Details
                </Typography>
                <RightArrowIcon />
              </div>
            </div>
          </div>
        </div>
        <div>
          <LinkButton className={classes['secondary-button']}>
            VISUAL TRY ON
          </LinkButton>
          <LinkButton className={classes['primary-button']}>
            ADD TO CART
          </LinkButton>
        </div>
      </Popover>
    </>
  )
}

export default ProductView
