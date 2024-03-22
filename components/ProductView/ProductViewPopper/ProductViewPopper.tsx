import { Typography } from 'antd'
import { RightIconWithBorder } from 'components/Icons/GenericIcons'
import Popover from 'components/shared/Popover/Popover'
import React from 'react'
import { flushSync } from 'react-dom'
import { assetUrl } from 'utils/constants'

import classes from './ProductViewPopper.module.scss'

type ProducrComponentProp = {
  setIsProductViewOpen: (value: boolean) => void
  setProductPopper: (value: boolean) => void
  isOpen: boolean
}

const ProductViewPopper = ({
  setIsProductViewOpen,
  setProductPopper,
  isOpen
}: ProducrComponentProp) => {
  const selectedRef = React.useRef(null)
  const [index, setIndex] = React.useState(0)
  const ImageList = ['/images/prodimgbig.png', '/images/sareeImg.png', '/images/earringComponent.png', '/images/EarringinEar.png', '/images/EarringinEar.png', '/images/earringComponent.png', '/images/EarringinEar.png']
  const [mainImgUrl, setMainImgUrl] = React.useState(ImageList[0])

  return (
    <Popover
      contentClassName="product-popover"
      isOpen={isOpen}
      withRetractIcon
      onClose={() => {
        setProductPopper(false)
        setIsProductViewOpen(true)
      }}
    >
      <div className={classes['heading-div']}>
        <Typography style={{ fontSize: '16px', color: 'white' }}>
          Zoya
        </Typography>
        <Typography style={{ fontSize: '14px', color: 'white' }}>
          Charming Gold and emerald diamond earring
        </Typography>
      </div>
      <div className={classes['heading-img']}>
        <img className={classes['hero-img']} src={`${assetUrl}${mainImgUrl}`} />
      </div>

      <div id='content' className={classes['carousel-component']}>
        <div className={classes['component-carousel']}>
          {ImageList.map((item, i) => {
            return <div
              key={i}
              ref={index === i
                ? selectedRef
                : null
              } className={classes['component-card']}>
              <img src={`${assetUrl}${item}`} />
            </div>
          })}
        </div>
        <div className={classes['scroller-div']} onClick={() => {
          flushSync(() => {
            if (index < ImageList.length - 1) {
              setMainImgUrl(ImageList[index + 1])
              setIndex(index + 1)
            } else {
              setIndex(0)
              setMainImgUrl(ImageList[0])
            }
          })
          selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            inline: 'center'
          })
        }}>
          <RightIconWithBorder className='scroller-big' />
        </div>
      </div>
    </Popover >
  )
}

export default ProductViewPopper
