import { Button } from 'components/shared/Buttons/Buttons'
import Popover from 'components/shared/Popover/Popover'
import * as React from 'react'

import Product from './Product/Product'
import classes from './ViewProducts.module.scss'
export type ProductsType = 'cart' | 'favourites'

type ViewProductsProps = {
  type: ProductsType
  onClose: () => void
}

type Category = 'Zoya' | 'Mia' | 'Taneria'

const categories = [
  { label: 'Zoya', value: 'Zoya' },
  { label: 'Mia', value: 'Mia' },
  { label: 'Taneria', value: 'Taneria' }
]

const initialCartState = [
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

const initialFavState = [
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

type ProductItem = (typeof initialFavState)[0]

const ViewProducts = ({ type, onClose }: ViewProductsProps) => {
  const [cartItems, setCartItems] = React.useState(initialCartState)
  const [favItems, setFavItems] = React.useState(initialFavState)
  const [activeCategory, setActiveCategory] = React.useState(categories[0])

  const items = type === 'cart' ? cartItems : (favItems as Array<ProductItem>)
  return (
    <div className={classes.wrapper}>
      <Popover
        withCloseIcon
        onClose={onClose}
        isOpen
        contentClassName={`${type === 'cart' ? 'cart' : 'fav'}-content`}
      >
        <div className={classes?.['content-wrapper']}>
          <h2 className={classes.title}>{type}</h2>
          {type === 'cart' && (
            <div className={classes.categories}>
              {categories.map((c) => (
                <div
                  key={c.value}
                  onClick={() => {
                    setActiveCategory(c)
                  }}
                  className={`${classes.category} ${
                    activeCategory.value === c.value ? classes.active : ''
                  }`}
                >
                  <p>{c.label}</p>
                </div>
              ))}
            </div>
          )}
          <div className={`${classes.products} scrollbar-hide`}>
            {items.map(({ id, ...item }) => (
              <Product
                key={id}
                id={id}
                type={type}
                product={item}
                onDecrease={(id: number) => {
                  if (item.quantity === 1) {
                    setCartItems((prev) => {
                      return prev.filter((item) => item.id !== id)
                    })
                  } else if (item.quantity > 1) {
                    const [changeItem] = cartItems.filter(
                      (item) => item.id === id
                    )
                    changeItem.quantity--
                    const prevItems = cartItems.filter((item) => item.id !== id)
                    setCartItems([changeItem, ...prevItems])
                  }
                }}
                onDelete={(id: number) => {
                  if (type === 'cart') {
                    setCartItems((prev) => {
                      return prev.filter((item) => item.id !== id)
                    })
                  } else {
                    setFavItems((prev) => {
                      return prev.filter((item) => item.id !== id)
                    })
                  }
                }}
                onIncrease={(id: number) => {
                  if (type === 'cart') {
                    const [item] = cartItems.filter((item) => item.id === id)
                    item.quantity++
                    const prevItem = cartItems.filter((item) => item.id !== id)
                    setCartItems([item, ...prevItem])
                  }
                }}
                onAdd={(id: number) => {
                  const [item] = favItems.filter((item) => item.id === id)
                  setFavItems((prev) => {
                    return prev.filter((item) => item.id !== id)
                  })
                  setCartItems([item, ...cartItems])
                }}
              />
            ))}
          </div>
          {type === 'cart' && (
            <div className={classes.checkout}>
              <Button className={classes.btn}>
                <p>
                  CHECKOUT{' '}
                  <span className={classes.total_amount}>₹ 96,998</span>
                </p>
              </Button>
            </div>
          )}
        </div>
      </Popover>
    </div>
  )
}

export default ViewProducts

// SAMPLE PRODUCTS, DELETE WHEN INTEGRATION
// const getProducts = (type: Category) =>
