import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { assetUrl } from 'utils/constants'
// import { getMetadata } from 'utils/globals'
import 'swiper/scss'

import { MobileBottomProps } from '../MobileBottom'

import classes from './ProductSlider.module.scss'

const ProductSlider = ({
  onSelect,
  products,
  isColorSlider,
  smallImages,
  initialSlide = 0
}: MobileBottomProps) => {
  // const { productlist } = getMetadata()
  return (
    <div className={`${classes.swiperwrap} to-center`}>
      <Swiper
        className={classes.slider}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={initialSlide}
        slideToClickedSlide={true}
        spaceBetween={isColorSlider ? 0 : 15}
        onActiveIndexChange={(s) => {
          onSelect(s.activeIndex)
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`${classes.item} ${isColorSlider ? classes.colorItem : ''
                } v-to-center`}
            >
              {({ isActive }) => (
                <div
                  className={`to-center ${classes.prodwrapper} ${isColorSlider ? classes.colorProdWrapper : ''
                    } ${smallImages ? classes.smallImages : ''} ${isActive ? classes.active : ''} ${isColorSlider && isActive ? classes.colorActive : ''
                    } ${smallImages && isActive ? classes.smallActiveImages : ''} `}
                  {...(isColorSlider && {
                    style: {
                      backgroundColor: product?.color
                    }
                  })}
                >
                  {!isColorSlider && (
                    <img src={`${assetUrl}/${product.image}`} alt="" />
                  )}
                </div>
              )}
              {/* <div className={`${classes.prodwrapper}`}>
                <img src={`${assetUrl}/${product.imageUrl}`} alt="" />
              </div> */}
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ProductSlider
