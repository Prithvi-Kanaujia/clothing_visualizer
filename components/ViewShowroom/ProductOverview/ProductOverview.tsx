/* jscpd:ignore-start */

import {
  ExpandIcon,
  HunderedBadgeIcon,
  LeftArrowIcon
} from 'components/Icons/EditorViewIcons'
import { Button, ButtonSecondary } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React, { Fragment, useState } from 'react'
import { setOpenProductPop } from 'store/editor-slice'
import { useAppDispatch } from 'store/hook'
import { IProductMode } from 'ts/interfaces'
import { assetUrl } from 'utils/constants'

import classes from './ProductOverview.module.scss'

export const ProductDetails = (props: any) => {
  return (
    <div className={`${classes.detailwrap} v-to-center`}>
      <div
        className={`${classes['overview-back']} to-center`}
        onClick={() => {
          props.setProductMode('overview')
        }}
      >
        <LeftArrowIcon /> Product overview
      </div>
      <div className={`${classes.productspecs} v-to-center`}>
        <h2>Product Specifications</h2>

        <div className={classes.tablewrap}>
          <table>
            <tr>
              <td className={classes.keycolumn}>product category</td>
              <td>Saree</td>
            </tr>
            <tr>
              <td>Fabric</td>
              <td>Tusar</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>Lucknow</td>
            </tr>
            <tr>
              <td>product Category</td>
              <td>Saree</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>Lucknow</td>
            </tr>
            <tr>
              <td>Origin</td>
              <td>Lucknow</td>
            </tr>
          </table>
        </div>
      </div>

      <div className={`${classes.badges} to-center`}>
        <div className={`${classes.badgeitem} v-to-center`}>
          <div className={`${classes.badgelogo} to-center`}>
            <HunderedBadgeIcon />
          </div>
          <p>100% Cotton</p>
        </div>
        <div className={`${classes.badgeitem} v-to-center`}>
          <div className={`${classes.badgelogo} to-center`}>
            <HunderedBadgeIcon />
          </div>
          <p>100% Cotton</p>
        </div>
        <div className={`${classes.badgeitem} v-to-center`}>
          <div className={`${classes.badgelogo} to-center`}>
            <HunderedBadgeIcon />
          </div>
          <p>100% Cotton</p>
        </div>
        <div className={`${classes.badgeitem} v-to-center`}>
          <div className={`${classes.badgelogo} to-center`}>
            <HunderedBadgeIcon />
          </div>
          <p>100% Cotton</p>
        </div>
        <div className={`${classes.badgeitem} v-to-center`}>
          <div className={`${classes.badgelogo} to-center`}>
            <HunderedBadgeIcon />
          </div>
          <p>100% Cotton</p>
        </div>
      </div>

      <div className={`${classes.bottomcta} to-center`}>
        <p>Return and Exchanges</p>
        <p>Shipping</p>
        <p>Cancellation</p>
        <p>Delivery Info</p>
        <p>Privacy</p>
      </div>
    </div>
  )
}

export const ZoomProduct = () => {
  return (
    <div className={`${classes.zoomwrap} v-to-center`}>
      <div className={`${classes['prod-details']} v-to-center`}>
        <div>
          <h2>Zoya</h2>
        </div>
        <p>Charming Gold and emerald diamond earring</p>
      </div>
      <div className={`${classes.prodimg} v-to-center`}>
        <div className={classes.mainimg}>
          <img src={`${assetUrl}/images/prodimg.png`} alt="" />
        </div>
        <div className={`${classes.imgslide} to-center`}>
          <div className={`${classes.imgset} to-center`}>
            <div className={classes.minimg}>
              <img src={`${assetUrl}/images/prodimg.png`} alt="" />
            </div>
            <div className={classes.minimg}>
              <img src={`${assetUrl}/images/prodimg.png`} alt="" />
            </div>
            <div className={classes.minimg}>
              <img src={`${assetUrl}/images/prodimg.png`} alt="" />
            </div>
            <div className={classes.minimg}>
              <img src={`${assetUrl}/images/prodimg.png`} alt="" />
            </div>
          </div>
          <div className={`${classes['slide-arrow']} to-center`}>
            <LeftArrowIcon className="rotate-180" />
          </div>
        </div>
      </div>
    </div>
  )
}

const ProductOverview = () => {
  const [productMode, setProductMode] = useState<IProductMode>('overview')
  const dispatch = useAppDispatch()
  return (
    <div className={classes.wrapper}>
      <ModalPrimary
        hasClose
        onClose={() => {
          if (productMode === 'zoomimg') {
            setProductMode('overview')
          } else {
            dispatch(setOpenProductPop(false))
          }
        }}
        className={`${classes.content}  v-to-center`}
      >
        {productMode === 'overview' && (
          <Fragment>
            <div className={`${classes.productslide} to-center`}>
              <div className={`${classes['arrow-wrap']} to-center`}>
                <LeftArrowIcon />
              </div>
              <p>1/20 Products</p>
              <div className={`${classes['arrow-wrap']} to-center`}>
                <LeftArrowIcon className="rotate-180" />
              </div>
            </div>
            <div className={`${classes.product} to-center`}>
              <div className={`${classes.prodimg} v-to-center`}>
                <div className={classes.mainimg}>
                  <div
                    className={`${classes.expand} to-center`}
                    onClick={() => {
                      setProductMode('zoomimg')
                    }}
                  >
                    <ExpandIcon />
                  </div>
                  <img src={`${assetUrl}/images/prodimg.png`} alt="" />
                </div>
                <div className={`${classes.imgslide} to-center`}>
                  <div className={`${classes.imgset} to-center`}>
                    <div className={classes.minimg}>
                      <img src={`${assetUrl}/images/prodimg.png`} alt="" />
                    </div>
                    <div className={classes.minimg}>
                      <img src={`${assetUrl}/images/prodimg.png`} alt="" />
                    </div>
                    <div className={classes.minimg}>
                      <img src={`${assetUrl}/images/prodimg.png`} alt="" />
                    </div>
                    <div className={classes.minimg}>
                      <img src={`${assetUrl}/images/prodimg.png`} alt="" />
                    </div>
                  </div>
                  <div className={`${classes['slide-arrow']} to-center`}>
                    <LeftArrowIcon className="rotate-180" />
                  </div>
                </div>
              </div>

              <div className={`${classes['prod-details']} v-to-center`}>
                <div>
                  <h2>Zoya</h2>
                </div>
                <p>Charming Gold and emerald diamond earring</p>
                <div className={classes.price}>&#8377; 45,999</div>
                <div
                  className={`${classes['view-details']} to-center`}
                  onClick={() => {
                    setProductMode('details')
                  }}
                >
                  View Details <LeftArrowIcon className="rotate-180" />
                </div>
              </div>
            </div>
            <div className={`${classes.bottombtns} v-to-center`}>
              <ButtonSecondary
                style={{ width: '100%' }}
                className={classes.transbtn}
              >
                VIRTUAL TRY ON
              </ButtonSecondary>
              <Button style={{ width: '100%' }}>ADD TO CART</Button>
            </div>
          </Fragment>
        )}

        {productMode === 'zoomimg' && <ZoomProduct />}

        {productMode === 'details' && (
          <ProductDetails setProductMode={setProductMode} />
        )}
      </ModalPrimary>
    </div>
  )
}

export default ProductOverview

/* jscpd:ignore-end */
