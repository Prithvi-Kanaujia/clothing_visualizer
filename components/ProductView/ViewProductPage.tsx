import ProductSlider from 'components/ViewUserPage/MobileBottom/ProductSlider/ProductSlider'
import TopNav from 'components/ViewUserPage/TopNav/TopNav'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { assetUrl } from 'utils/constants'

import ProductView from './productPopover/ProductView'
import ProductPopperMobile from './ProductPopperMobile/ProductPopperMobile'
import ProductViewPopper from './ProductViewPopper/ProductViewPopper'
import ProductViewPopperMobile from './ProductViewPopperMobile/ProductViewPopperMobile'
import ViewDetails from './ViewDetails/ViewDetails'
import ViewDetailsmobile from './ViewDetailsMobile/ViewDetailsmobile'
import classes from './ViewProductPage.module.scss'

const ViewProduct = () => {
  const [isProductViewOpen, setIsProductViewOpen] = React.useState(true)
  const [productPopper, setProductPopper] = React.useState(false)
  const [productsDetails, setproductDetails] = React.useState(false)
  return (
    <div>
      <TopNav />
      <div>
        {isMobile && (
          <div className={classes['slider-div']}>
            <ProductSlider products={products} onSelect={() => null} />
          </div>
        )}
        {!isMobile && (
          <div>
            <ProductView
              isOpen={isProductViewOpen}
              setProductPopper={setProductPopper}
              setproductDetails={setproductDetails}
              setIsProductViewOpen={setIsProductViewOpen}
            />
          </div>
        )}
        {isMobile && (
          <div>
            <ProductPopperMobile
              isOpen={isProductViewOpen}
              setProductPopper={setProductPopper}
              setproductDetails={setproductDetails}
              setIsProductViewOpen={setIsProductViewOpen}
            />
          </div>
        )}
        {isMobile && (
          <ProductViewPopperMobile
            isOpen={productPopper}
            setProductPopper={setProductPopper}
            setIsProductViewOpen={setIsProductViewOpen}
          />
        )}
        {!isMobile && (
          <ProductViewPopper
            isOpen={productPopper}
            setProductPopper={setProductPopper}
            setIsProductViewOpen={setIsProductViewOpen}
          />
        )}
        {!isMobile && (
          <div>
            <ViewDetails
              isOpen={productsDetails}
              setproductDetails={setproductDetails}
              setIsProductViewOpen={setIsProductViewOpen}
            />
          </div>
        )}
        {isMobile && (
          <div>
            <ViewDetailsmobile
              isOpen={productsDetails}
              setproductDetails={setproductDetails}
              setIsProductViewOpen={setIsProductViewOpen}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewProduct

const products = [
  {
    id: 0,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 1,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 2,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 3,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 4,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 5,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 6,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 7,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  },
  {
    id: 8,
    name: 'Taneira',
    description: 'Light Blue Organza Gotapatti Saree',
    image: isMobile ? 'images/prodVisualizerMobile.png' : assetUrl + '/images/prodVisualizer.png'
  }
]
