import React, { useState } from 'react'
import { assetUrl } from 'utils/constants'

import classes from './DropUp.module.scss'

export interface DropUpProps {
  showUp: boolean
  editor: boolean
  products?: Array<string>
  initialState?: string
}

export const DropUp = (props: DropUpProps) => {
  const {
    showUp,
    editor,
    initialState = 'All Products',
    products = [
      'All showrooms',
      'Karishma’s showroom...',
      'Fine jewellery an..',
      'Fine jewellery an..',
      'Karishma’s showroom...',
      'Fine jewellery an..',
      'Karishma’s showroom...'
    ]
  } = props
  const [isOpen, setIsOpen] = useState(false)
  // const [search, setSearch] = useSearchParams()
  const [selectedItem, setSelectedItem] = useState(initialState)
  const [dropUpData, setDropUpData] = useState([])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const handleText = (title: string, panoId: string) => {
    setSelectedItem(title)
    // if (search.get('panoId') !== panoId) {
    //   search.set('panoId', panoId)
    // setSearch(search)
    // setTimeout(() => {
    //   GlobalVariables.showroomHelperObject?.handleJumperClick(panoId)
    // }, 400)
    // }
  }

  // useEffectOnce(() => {
  //   fetch(`${baseUrl}/jsons/showroom.json`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDropUpData(data.dropitems)
  //     })
  //     .catch((error) => {
  //       window.Sentry?.captureException(error)
  //     })
  // })

  return (
    <div
      className={`${classes.dropdown} ${editor ? classes.qdrop : ''} ${
        isOpen ? classes.active : ''
      }`}
      onClick={() => {
        handleClick()
      }}
    >
      {!showUp && <div className={classes.droptext}>{selectedItem}</div>}
      <div
        className={`${classes.dropitems} ${editor ? classes.qdropitems : ''}`}
      >
        {products.map((item: any, id) => {
          return (
            <div
              onClick={() => {
                handleText(item, item.panoId)
              }}
              className={`${classes.dropitem} ${
                editor ? classes.qdropitem : ''
              }`}
              key={id}
            >
              {editor && (
                <div className={`${classes.qnavimg} to-center`}>
                  <img src={`${assetUrl}/images/qnavimg.png`} alt="" />
                </div>
              )}
              {item}
            </div>
          )
        })}
      </div>
      {showUp && (
        <div
          className={`${classes.droptext} ${editor ? classes.qdroptext : ''}`}
        >
          {selectedItem}
        </div>
      )}
    </div>
  )
}
