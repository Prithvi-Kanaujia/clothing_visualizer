import MobileBottom from 'components/ViewUserPage/MobileBottom/MobileBottom'
import React from 'react'
import { isMobile } from 'react-device-detect'

import Product from './Product/Product'
import classes from './Products.module.scss'

export type VisualizerProduct = {
  id: number
  name: string
  description: string
  image: string
}

type VisualizerProductsProps = {
  products: VisualizerProduct[]
  onSelect: (id: number) => void
  selected: number
}

function VisualizerProducts({
  onSelect,
  products,
  selected
}: VisualizerProductsProps) {
  if (isMobile) {
    const activeProdct = products.find(product => product.id === selected)
    return (
      <>
        <MobileBottom initialSlide={selected} onSelect={onSelect} products={products} />
        <Product key={activeProdct.id} product={activeProdct} onSelect={() => null} isSelected />
      </>
    )
  }
  return (
    <div className={classes.outer}>
      <div className={classes.wrapper}>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onSelect={() => {
              onSelect(product.id)
            }}
            isSelected={selected === product.id}
          />
        ))}
      </div>
    </div>
  )
}

export default VisualizerProducts
