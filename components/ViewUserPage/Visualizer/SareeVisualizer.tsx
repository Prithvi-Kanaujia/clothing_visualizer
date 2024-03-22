/* eslint-disable multiline-ternary */
import { LeftArrowIcon } from 'components/Icons/EditorViewIcons'
import { SettingIconSecondary } from 'components/Icons/PanelIcons'
import { ButtonSecondary } from 'components/shared/Buttons/Buttons'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { assetUrl } from 'utils/constants'

import VisualizerMannequin from './Mannequin/Mannequin'
import VisualizerProducts from './Products/Products'
import classes from './SareeVisualizer.module.scss'
import VisualizerSettings from './Settings/Settings'

type SareeVisualizerProps = {
  onExit: () => void
}

const categories = [
  { label: 'Products', value: 'Products' },
  { label: 'Mannequin', value: 'Mannequin' }
]

export const initialState = {
  sortBy: 'relevance',
  priceStart: undefined,
  priceEnd: undefined,
  priceRange: '0',
  fabric: {
    cotton: false,
    chiffon: false,
    crepes: false,
    georgette: false,
    khadi: false,
    linen: false,
    organza: false,
    mulmul: false,
    silk: false,
    tencel: false
  },
  colour: {
    brown: false,
    orange: false,
    red: false,
    yellow: false,
    aqua: false,
    green: false,
    blue: false,
    beige: false,
    black: false,
    white: false
  }
}

const SareeVisualizer = ({ onExit }: SareeVisualizerProps) => {
  const [activeTab, setActiveTab] = React.useState(categories[0])
  const [showSettings, setShowSettings] = React.useState(false)
  const [selectedProductId, setSelectedProductId] = React.useState(0)
  const [filters, setFilters] = React.useState(initialState)
  const [mannequinData, setMannequinData] = React.useState({
    height: '175',
    weight: '65',
    shade: 0
  })

  const renderSettings = () => {
    return <VisualizerSettings
      filters={filters}
      onSetFilter={(id, value) => {
        setFilters((prev) => ({
          ...prev,
          [id]: value
        }))
      }}
      onExit={() => {
        setShowSettings(false)
      }}
    />
  }

  const renderProducts = () => {
    return (
      <VisualizerProducts
        products={products}
        selected={selectedProductId}
        onSelect={(id: number) => {
          setSelectedProductId(id)
        }}
      />
    )
  }

  const renderMannequin = () => {
    return <VisualizerMannequin data={mannequinData} onChange={(id: keyof typeof mannequinData, value: string | number) => {
      return setMannequinData(prev => ({
        ...prev,
        [id]: value
      }))
    }} shades={shades} />
  }

  if (isMobile) {
    return (
      <div className={`${classes.mobileWrapper}`}>
        {!showSettings ? (
          <>
            {activeTab.value === 'Mannequin' && renderMannequin()}
            {activeTab.value === 'Products' && renderProducts()}
            <div className={classes.mobileTabs}>
              <div className={classes.mobileCats}>
                {categories.map(c => (
                  <div key={c.value} onClick={() => {
                    setActiveTab(c)
                  }} className={`${classes.mobileCat} ${classes.text} ${activeTab.value === c.value ? classes.activeMobile : ''
                    }`}><p>{c.label}</p></div>
                ))}
              </div>
              <div className={`${classes.mobileSettingIcon} to-center`} onClick={() => {
                setShowSettings(true)
              }}>
                <SettingIconSecondary />
              </div>
            </div>
          </>
        )
          : renderSettings()}
      </div>
    )
  }

  return (
    <>
      <div
        className={`${classes.wrapper} ${showSettings ? classes.settings : ''}`}
      >
        {!showSettings && (
          <>
            <div className={`${classes.exit}`}>
              <ButtonSecondary onClick={onExit}>
                <LeftArrowIcon />
                <p className={classes.text}>Exit saree visualiser</p>
              </ButtonSecondary>
            </div>
            <div className={classes?.['tabs-panel']}>
              <div className={`${classes.categories} ${classes.text}`}>
                {categories.map((c) => (
                  <div
                    key={c.value}
                    onClick={() => {
                      setActiveTab(c)
                    }}
                    className={`${classes.category} ${activeTab.value === c.value ? classes.active : ''
                      }`}
                  >
                    <p>{c.label}</p>
                  </div>
                ))}
              </div>
              <div
                className={classes['setting-icon']}
                onClick={() => {
                  setShowSettings(true)
                }}
              >
                <SettingIconSecondary />
              </div>
            </div>
            {activeTab.value === 'Products' && renderProducts()}
            {activeTab.value === 'Mannequin' && renderMannequin()}
          </>
        )}
        {showSettings && renderSettings()}
      </div>
    </>
  )
}

export default SareeVisualizer

const shades = [
  { id: 0, color: '#ac7853' },
  { id: 1, color: '#b5845b' },
  { id: 2, color: '#c38d61' },
  { id: 3, color: '#c1946b' },
  { id: 4, color: '#cea978' },
  { id: 5, color: '#debc97' },
  { id: 6, color: '#ad7753' },
  { id: 7, color: '#8e5b3c' },
  { id: 8, color: '#7d4f37' },
  { id: 9, color: '#6a4532' },
  { id: 10, color: '#6a482f' },
  { id: 11, color: '#583d2c' }
]

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
