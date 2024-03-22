import React from 'react'

import classes from './MobileBottom.module.scss'
import ProductSlider from './ProductSlider/ProductSlider'

export type MobileBottomProps = {
  onSelect: (id: number) => void
  products: Array<Record<string, any>>
  isColorSlider?: boolean
  smallImages?: boolean
  initialSlide?: number
}

const MobileBottom = ({
  onSelect,
  products,
  isColorSlider,
  smallImages,
  initialSlide
}: MobileBottomProps) => {
  return (
    <div className={`${classes.wrapper} v-to-center`}>
      <div className={classes.topwrap}>
        <ProductSlider
          onSelect={onSelect}
          isColorSlider={isColorSlider}
          initialSlide={initialSlide}
          smallImages={smallImages}
          products={products}
        />
      </div>
      <div className={`${classes['prod-detail']}`}></div>
    </div>
  )
}

export default MobileBottom
