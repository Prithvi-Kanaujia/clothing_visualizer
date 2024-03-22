import { CartIcon } from 'components/Icons/EditorViewIcons'
import { MinusIcon, PlusIcon } from 'components/Icons/GenericIcons'
import { DeleteIcon } from 'components/Icons/PanelIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import * as React from 'react'
import { formatAmount } from 'utils/amount'
import { assetUrl } from 'utils/constants'

import { ProductsType } from '../ViewProducts'

import classes from './ProductMobile.module.scss'

type ProductResponse = {
  image?: string
  title: string
  description: string
  price: number
  quantity: number
}

type ProductProps = {
  product: ProductResponse
  onDelete: (id: number) => void
  onIncrease: (id: number) => void
  onDecrease: (id: number) => void
  onAdd: (id: number) => void
  id: number
  type: ProductsType
}

const ProductMobile = ({
  product,
  onDelete,
  onDecrease,
  onIncrease,
  onAdd,
  id,
  type
}: Partial<ProductProps>) => {
  return (
    <div className={classes['wrapper-mobile']}>
      <div className={classes['image-mobile']}>
        <img
          src={`${assetUrl}/images/prodimg.png`}
          alt="product_image"
          width={78}
          height={78}
        />
      </div>
      <div className={classes['information-mobile']}>
        <div className={classes['upper-mobile']}>
          <h2>{product.title}</h2>
          <div
            className={classes['delete-mobile']}
            onClick={() => onDelete(id)}
          >
            <DeleteIcon />
          </div>
        </div>
        <div className={classes['middle-mobile']}>
          <p>{product.description}</p>
        </div>
        <div className={classes['lower-mobile']}>
          <p className={classes['product-price']}>{`Rs ${formatAmount(
            `${product.price}`
          )}`}</p>
          {type === 'cart' ? (
            <div className={classes['quantity-wrapper-mobile']}>
              <div onClick={() => onDecrease(id)}>
                <MinusIcon
                  color={product.quantity > 1 ? '#000000' : '#A1A1A1'}
                />
              </div>
              <p>{product.quantity}</p>
              <div onClick={() => onIncrease(id)}>
                <PlusIcon color="#000000" />
              </div>
            </div>
          ) : (
            <Button className={classes['btn-mobile']} onClick={() => onAdd(id)}>
              <p className="to-center">
                <CartIcon /> ADD
              </p>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductMobile
