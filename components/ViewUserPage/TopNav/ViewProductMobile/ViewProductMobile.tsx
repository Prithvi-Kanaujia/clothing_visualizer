import { Button } from 'components/shared/Buttons/Buttons'
import MobileViewKnob from 'components/shared/MobileViewKnob/MobileViewKnob'
import Popover from 'components/shared/Popover/Popover'
import * as React from 'react'

import ProductMobile from '../ViewProducts/ProductMobile/ProductMobile'

import classes from './ViewProductMobile.module.scss'

type ViewProductsMobileProps = {
  type: ProductsType
  onClose: () => void
}

export type ProductsType = 'cart' | 'favourites'

type Category = 'Zoya' | 'Mia' | 'Taneria'

const categories = [
  { label: 'Zoya', value: 'Zoya' },
  { label: 'Mia', value: 'Mia' },
  { label: 'Taneria', value: 'Taneria' }
]

const initialCartStateMobile = [
  {
    id: 0,
    title: 'cart',
    description: 'Charming Gold and emerald diamond earring',
    price: 45999,
    quantity: 3
  },
  {
    id: 1,
    title: 'cart',
    description: 'Charming Gold and emerald diamond earring',
    price: 15999,
    quantity: 1
  },
  {
    id: 2,
    title: 'cart',
    description: 'Charming Gold and emerald diamond earring',
    price: 35999,
    quantity: 1
  },
  {
    id: 3,
    title: 'cart',
    description: 'Charming Gold and emerald diamond earring',
    price: 45999,
    quantity: 1
  }
]

const initialFavStateMobile = [
  {
    id: 0,
    title: 'favourites',
    description: 'Charming Gold and emerald diamond earring',
    price: 45999,
    quantity: 1
  },
  {
    id: 1,
    title: 'favourites',
    description: 'Charming Gold and emerald diamond earring',
    price: 15999,
    quantity: 1
  },
  {
    id: 2,
    title: 'favourites',
    description: 'Charming Gold and emerald diamond earring',
    price: 35999,
    quantity: 1
  },
  {
    id: 3,
    title: 'favourites',
    description: 'Charming Gold and emerald diamond earring',
    price: 45999,
    quantity: 1
  }
]

type ProductItem = (typeof initialFavStateMobile)[0]

const ViewProductsMobile = ({ type, onClose }: ViewProductsMobileProps) => {
  const [cartItemsMobile, setCartItemsMobile] = React.useState(
    initialCartStateMobile
  )
  const [favItemsMobile, setFavItemsMobile] = React.useState(
    initialFavStateMobile
  )
  const [activeCategory, setActiveCategory] = React.useState(categories[0])
  const items =
    type === 'cart' ? cartItemsMobile : (favItemsMobile as Array<ProductItem>)
  return (
    <div className={classes.wrapper}>
      <Popover
        onClose={onClose}
        isOpen
        contentClassName={`${
          type === 'cart' ? 'cart-mobile' : 'fav-mobile'
        }-content`}
      >
        <div className={classes['slide-knob-view-product']}>
          <MobileViewKnob />
        </div>
        <div className={classes?.['content-wrapper-mobile']}>
          <h2 className={classes['title-mobile']}>{type}</h2>
          {type === 'cart' && (
            <div className={classes['categories-mobile']}>
              {categories.map((c) => (
                <div
                  key={c.value}
                  onClick={() => {
                    setActiveCategory(c)
                  }}
                  className={`${classes['category-mobile']} ${
                    activeCategory.value === c.value
                      ? classes['active-mobile']
                      : ''
                  }`}
                >
                  <p>{c.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className={`${classes['products-mobile']} scrollbar-hide`}>
            {items.map(({ id, ...item }) => (
              <ProductMobile
                key={id}
                id={id}
                type={type}
                product={item}
                onDecrease={(id: number) => {
                  if (item.quantity === 1) {
                    setCartItemsMobile((prev) => {
                      return prev.filter((item) => item.id !== id)
                    })
                  } else if (item.quantity > 1) {
                    const [changeItem] = cartItemsMobile.filter(
                      (item) => item.id === id
                    )
                    changeItem.quantity--
                    const prevItems = cartItemsMobile.filter(
                      (item) => item.id !== id
                    )
                    setCartItemsMobile([changeItem, ...prevItems])
                  }
                }}
                onDelete={(id: number) => {
                  if (type === 'cart') {
                    setCartItemsMobile((prev) => {
                      return prev.filter((item) => item.id !== id)
                    })
                  } else {
                    setFavItemsMobile((prev) => {
                      return prev.filter((item) => item.id !== id)
                    })
                  }
                }}
                onIncrease={(id: number) => {
                  if (type === 'cart') {
                    const [item] = cartItemsMobile.filter(
                      (item) => item.id === id
                    )
                    item.quantity++
                    const prevItem = cartItemsMobile.filter(
                      (item) => item.id !== id
                    )
                    setCartItemsMobile([item, ...prevItem])
                  }
                }}
                onAdd={(id: number) => {
                  const [item] = favItemsMobile.filter((item) => item.id === id)
                  setFavItemsMobile((prev) => {
                    return prev.filter((item) => item.id !== id)
                  })
                  setCartItemsMobile([item, ...cartItemsMobile])
                }}
              />
            ))}
          </div>
          {type === 'cart' && (
            <div className={classes['checkout-mobile']}>
              <Button className={classes['btn-mobile']}>
                <p>
                  CHECKOUT{' '}
                  <span className={classes['total-amount']}>₹ 96,998</span>
                </p>
              </Button>
            </div>
          )}
        </div>
      </Popover>
    </div>
  )
}

export default ViewProductsMobile

// SAMPLE PRODUCTS, DELETE WHEN INTEGRATION
