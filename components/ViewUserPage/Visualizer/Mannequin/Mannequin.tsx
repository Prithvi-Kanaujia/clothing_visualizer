import { ResetIcon } from 'components/Icons/GenericIcons'
import RangeInput from 'components/shared/RangeInput/RangeInput'
import MobileBottom from 'components/ViewUserPage/MobileBottom/MobileBottom'
import React from 'react'
import { isMobile } from 'react-device-detect'
import { assetUrl } from 'utils/constants'
import weight_value from '../../../../mannequin_showroom/main'

import classes from './Mannequin.module.scss'
import Shades from './Shades'

console.log(weight_value)

type Mannequin = {
  height: string
  weight: string
  shade: number
}

type VisualizerMannequin = {
  shades: Array<{ id: number; color: string }>
  data: Mannequin
  onChange: (id: keyof Mannequin, value: string | number) => void
}

const filters = [
  { id: 0, value: 'height', image: 'icons/height-filter.svg' },
  { id: 1, value: 'shade', image: 'images/shade.png' },
  { id: 2, value: 'weight', image: 'icons/weight-filter.svg' }
]

function VisualizerMannequin({ shades, data, onChange }: VisualizerMannequin) {
  const [selectedMannequinFilterId, setSelectedMannequinFilterId] =
    React.useState(0)

  const currentFilter = filters.find(
    (filter) => filter.id === selectedMannequinFilterId
  )?.value

  if (isMobile) {
    return (
      <>
        <div className={classes.filter}>
          {currentFilter === 'height' && (
            <div className={classes.mobileRange}>
              <div className={classes.top}>
                <RangeInput
                  name="height"
                  id="height"
                  min='150'
                  max='200'
                  value={data.height}
                  onChange={(e) => {
                    onChange('height', e.target.value)
                  }}
                />
                <div onClick={() => {
                  onChange('height', '175')
                }}>
                  <ResetIcon />
                </div>
              </div>
              <div className={`${classes.values} ${classes.bottom}`}>
                <p>1.50m</p>
                <p>2.00m</p>
              </div>
            </div>
          )}
          {currentFilter === 'shade' && (
            <div className={classes.shadeFilter}>
              <MobileBottom
                onSelect={(id) => {
                  onChange('shade', id)
                }}
                isColorSlider
                initialSlide={data.shade}
                products={shades}
              />
            </div>
          )}
          {currentFilter === 'weight' && (
            <div className={classes.mobileRange}>
              <div className={classes.top}>
                <RangeInput
                  name="weight"
                  id="weight"
                  min='45'
                  max='120'
                  value={data.weight}
                  onChange={(e) => {
                    onChange('weight', e.target.value)
                  }}
                />
                <div onClick={() => {
                  onChange('weight', '65')
                }}>
                  <ResetIcon />
                </div>
              </div>
              <div className={`${classes.values} ${classes.bottom}`}>
                <p>45kg</p>
                <p>120kg</p>
              </div>
            </div>
          )}
        </div>
        <div className={classes.filters}>
          <MobileBottom
            smallImages
            onSelect={(id) => {
              setSelectedMannequinFilterId(id)
            }}
            products={filters}
          />
        </div>
      </>
    )
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes['filter-wrapper']}>
        <div className={classes.top}>
          <h3>Height</h3>
          <p onClick={() => {
            onChange('height', '175')
          }}>Reset</p>
        </div>
        <div className={classes.bottom}>
          <img src={`${assetUrl}/icons/height-filter.svg`} alt="height" />
          <div className={classes.input}>
            <RangeInput
              name="height"
              id="height"
              min='150'
              max='200'
              value={data.height}
              onChange={(e) => {
                onChange('height', e.target.value)
              }}
            />
            <div className={classes.values}>
              <p>1.50m</p>
              <p>2.00m</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes['filter-wrapper']}>
        <div className={classes.top}>
          <h3>Weight</h3>
          <p onClick={() => {
            onChange('weight', '65')
          }}>Reset</p>
        </div>
        <div className={classes.bottom}>
          <img src={`${assetUrl}/icons/weight-filter.svg`} alt="height" />
          <div className={classes.input}>
            <RangeInput
              name="weight"
              id="weight"
              min='45'
              max='120'
              value={data.weight}
              onChange={(e) => {
                onChange('weight', e.target.value)
              }}
            />
            <div className={classes.values}>
              <p>45kg</p>
              <p>120kg</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes['filter-wrapper']}>
        <div className={classes.top}>
          <h3>Skin shade</h3>
          <p
            onClick={() => {
              onChange('shade', 0)
            }}
          >
            Reset
          </p>
        </div>
        <Shades
          shades={shades}
          selectedId={data.shade}
          onChange={(id: number) => {
            onChange('shade', id)
          }}
        />
      </div>
    </div>
  )
}

export default VisualizerMannequin
