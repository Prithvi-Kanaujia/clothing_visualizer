import {
  CartIcon,
  HeartFavIcon,
  RightArrowIcon
} from 'components/Icons/EditorViewIcons'
import ViewDetailsmobile from 'components/ProductView/ViewDetailsMobile/ViewDetailsmobile'
import { Button } from 'components/shared/Buttons/Buttons'
import React from 'react'
import { isMobile } from 'react-device-detect'

import { VisualizerProduct } from '../Products'

import classes from './Product.module.scss'

type ProductProps = {
  product: VisualizerProduct
  onSelect: () => void
  isSelected: boolean
}

function Product({ product, onSelect, isSelected }: ProductProps) {
  const [showDetails, setShowDetails] = React.useState(false)

  if (isMobile) {
    return (
      <div className={classes.mobileWrapper}>
        <div className={classes.productInfo}>
          <div className={classes.mobileImage}>
            <img src={product.image} alt={product.name} />
          </div>
          <div className={classes.prod}>
            <h2 className={classes.mobileName}>{product.name}</h2>
            <p className={classes.mobileDescription}>{product.description}</p>
            <h2 className={classes.price}>₹ 45,999</h2>
          </div>
        </div>
        <p
          onClick={() => {
            setShowDetails(true)
          }}
          className={classes.viewDetails}
        >
          View details <RightArrowIcon />
        </p>
        <div className={classes.favIcon}>
          <HeartFavIcon />
        </div>
        <div className={classes.addCart}>
          <Button>
            <CartIcon />
            ADD
          </Button>
        </div>
        {isMobile && (
          <div>
            <ViewDetailsmobile
              isOpen={showDetails}
              setproductDetails={setShowDetails}
              setIsProductViewOpen={() => null}
            />
          </div>
        )}
      </div>
    )
  }
  return (
    <div
      className={`${classes.wrapper} ${isSelected ? classes.selected : ''}`}
      onClick={onSelect}
    >
      <div className={`${classes.image} to-center`}>
        <img src={product.image} alt={product.name} />
      </div>
      <h2 className={classes.name}>{product.name}</h2>
      <p className={classes.description}>{product.description}</p>
    </div>
  )
}

export default Product
