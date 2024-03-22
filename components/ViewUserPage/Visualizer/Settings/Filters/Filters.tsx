import { Select } from 'antd'
import { MinusIcon, PlusIcon } from 'components/Icons/GenericIcons'
import CheckBox from 'components/shared/Checkbox/Checkbox'
import Collapse from 'components/shared/Collapse/Collapse'
import RangeInput from 'components/shared/RangeInput/RangeInput'
import React from 'react'

import { initialState } from '../../SareeVisualizer'

import classes from './Filters.module.scss'

export type FiltersProps = {
  filters: Record<string, any>
  onSetFilter: (id: string, value: any) => void
}

// TODO: Separate filters in their own individual components

function Filters(props: FiltersProps) {
  const [isPriceExpanded, setIsPriceExpanded] = React.useState(false)
  const [isFabricExpanded, setIsFabricExpanded] = React.useState(false)
  const [isColourExpanded, setIsColourExpanded] = React.useState(false)
  const [isCraftExpanded, setIsCraftExpanded] = React.useState(false)
  const [isThemeExpanded, setIsThemeExpanded] = React.useState(false)
  const [isOccasionExpanded, setIsOccasionExpanded] = React.useState(false)
  const [isOriginExpanded, setIsOriginExpanded] = React.useState(false)
  const [isZariExpanded, setIsZariExpanded] = React.useState(false)
  const [isCollectionExpanded, setIsCollectionExpanded] = React.useState(false)

  const [showMoreColor, setShowMoreColor] = React.useState(false)

  return (
    <div className={classes.wrapper}>
      <Select
        className={`${classes.sortSelect} sort-select`}
        defaultValue="relevance"
        popupClassName="sort-select-dropdown"
        dropdownStyle={{
          backgroundColor: 'rgba(0, 0, 0, 0.50)',
          backdropFilter: 'blur(20px)',
          color: '#FFF',
          fontSize: '14px',
          fontWeight: '500',
          lineHeight: '20px'
        }}
        value={props.filters?.sortBy}
        onChange={(v) => {
          props.onSetFilter('sortBy', v)
        }}
        options={sortOptions}
      />
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsPriceExpanded((prev) => !prev)
          }}
        >
          <h2>Price</h2>
          {isPriceExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isPriceExpanded}>
          <div className={classes.priceFilter}>
            <p
              className={classes.resetText}
              onClick={() => {
                props.onSetFilter('priceStart', undefined)
                props.onSetFilter('priceEnd', undefined)
              }}
            >
              Reset
            </p>
            <div className={classes.choose}>
              <div className={classes.top}>
                <div className={classes.inputW}>
                  <input
                    className={classes.priceInput}
                    type="number"
                    name="priceStart"
                    id="priceStart"
                    value={props.filters?.priceStart}
                    onChange={(e) => {
                      props.onSetFilter('priceStart', e.target.value)
                    }}
                  />
                </div>
                <p>to</p>
                <div className={classes.inputW}>
                  <input
                    className={classes.priceInput}
                    type="number"
                    name="priceEnd"
                    id="priceEnd"
                    value={props.filters?.priceEnd}
                    onChange={(e) => {
                      props.onSetFilter('priceEnd', e.target.value)
                    }}
                  />
                </div>
              </div>
              <div className={classes.bottom}>
                <RangeInput
                  min='0'
                  max='100000'
                  name='priceRange'
                  id='priceRange'
                  value={props.filters?.priceRange}
                  onChange={(e) => {
                    props.onSetFilter('priceRange', e.target.value)
                  }}
                />
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsFabricExpanded((prev) => !prev)
          }}
        >
          <h2>Fabric</h2>
          {isFabricExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isFabricExpanded}>
          <div className={classes.fabricFilter}>
            <p
              className={classes.resetText}
              onClick={() => {
                props.onSetFilter('fabric', initialState.fabric)
              }}
            >
              Reset
            </p>
            <div className={classes.checkboxes}>
              <label className={classes.container}>
                Cotton<span className={classes.quant}>(73)</span>
                <CheckBox name='cotton' checked={props.filters?.fabric?.cotton} onChange={(e) => {
                  props.onSetFilter('fabric', {
                    ...props.filters?.fabric,
                    cotton: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                Chiffon<span className={classes.quant}>(84)</span>
                <CheckBox name='chiffon' checked={props.filters?.fabric?.chiffon} onChange={(e) => {
                  props.onSetFilter('fabric', {
                    ...props.filters?.fabric,
                    chiffon: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                Crepes<span className={classes.quant}>(73)</span>
                <CheckBox name='crepes' checked={props.filters?.fabric?.crepes} onChange={(e) => {
                  props.onSetFilter('fabric', {
                    ...props.filters?.fabric,
                    crepes: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                Georgette<span className={classes.quant}>(35)</span>
                <CheckBox name='georgette' checked={props.filters?.fabric?.georgette} onChange={(e) => {
                  props.onSetFilter('fabric', {
                    ...props.filters?.fabric,
                    georgette: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                Khadi<span className={classes.quant}>(67)</span>
                <CheckBox name='khadi' checked={props.filters?.fabric?.khadi} onChange={(e) => {
                  props.onSetFilter('fabric', {
                    ...props.filters?.fabric,
                    khadi: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                Linen<span className={classes.quant}>(124)</span>
                <CheckBox name='linen' checked={props.filters?.fabric?.linen} onChange={(e) => {
                  props.onSetFilter('fabric', {
                    ...props.filters?.fabric,
                    linen: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              {showMoreColor && (
                <>
                  <label className={classes.container}>
                    Organza<span className={classes.quant}>(48)</span>
                    <CheckBox name='organza' checked={props.filters?.fabric?.organza} onChange={(e) => {
                      props.onSetFilter('fabric', {
                        ...props.filters?.fabric,
                        organza: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                  <label className={classes.container}>
                    Mulmul<span className={classes.quant}>(123)</span>
                    <CheckBox name='mulmul' checked={props.filters?.fabric?.mulmul} onChange={(e) => {
                      props.onSetFilter('fabric', {
                        ...props.filters?.fabric,
                        mulmul: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                  <label className={classes.container}>
                    Silk<span className={classes.quant}>(45)</span>
                    <CheckBox name='silk' checked={props.filters?.fabric?.silk} onChange={(e) => {
                      props.onSetFilter('fabric', {
                        ...props.filters?.fabric,
                        silk: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                  <label className={classes.container}>
                    Tencel<span className={classes.quant}>(23)</span>
                    <CheckBox name='tencel' checked={props.filters?.fabric?.tencel} onChange={(e) => {
                      props.onSetFilter('fabric', {
                        ...props.filters?.fabric,
                        tencel: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                </>
              )}
              <div
                className={classes.showMoreText}
                onClick={() => {
                  setShowMoreColor((prev) => !prev)
                }}
              >
                <p>{showMoreColor ? 'Show less' : '+ 12 more'}</p>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsColourExpanded((prev) => !prev)
          }}
        >
          <h2>Colour</h2>
          {isColourExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isColourExpanded}>
          <div className={classes.fabricFilter}>
            <p
              className={classes.resetText}
              onClick={() => {
                props.onSetFilter('colour', initialState.colour)
              }}
            >
              Reset
            </p>
            <div className={classes.checkboxes}>
              <label className={classes.container}>
                <span
                  style={{
                    backgroundColor: '#6A3C3C'
                  }}
                  className={classes.color}
                ></span>
                Brown<span className={classes.quant}>(45)</span>
                <CheckBox name='brown' checked={props.filters?.colour?.brown} onChange={(e) => {
                  props.onSetFilter('colour', {
                    ...props.filters?.colour,
                    brown: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                <span
                  style={{
                    backgroundColor: '#E0832E'
                  }}
                  className={classes.color}
                ></span>
                Orange<span className={classes.quant}>(58)</span>
                <CheckBox name='orange' checked={props.filters?.colour?.orange} onChange={(e) => {
                  props.onSetFilter('colour', {
                    ...props.filters?.colour,
                    orange: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                <span
                  style={{
                    backgroundColor: '#E0432E'
                  }}
                  className={classes.color}
                ></span>
                Red<span className={classes.quant}>(94)</span>
                <CheckBox name='red' checked={props.filters?.colour?.red} onChange={(e) => {
                  props.onSetFilter('colour', {
                    ...props.filters?.colour,
                    red: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                <span
                  style={{
                    backgroundColor: '#E0B92E'
                  }}
                  className={classes.color}
                ></span>
                Yellow<span className={classes.quant}>(47)</span>
                <CheckBox name='yellow' checked={props.filters?.colour?.yellow} onChange={(e) => {
                  props.onSetFilter('colour', {
                    ...props.filters?.colour,
                    yellow: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                <span
                  style={{
                    backgroundColor: '#2EE0E0'
                  }}
                  className={classes.color}
                ></span>
                Aqua<span className={classes.quant}>(367)</span>
                <CheckBox name='aqua' checked={props.filters?.colour?.aqua} onChange={(e) => {
                  props.onSetFilter('colour', {
                    ...props.filters?.colour,
                    aqua: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              <label className={classes.container}>
                <span
                  style={{
                    backgroundColor: '#28A486'
                  }}
                  className={classes.color}
                ></span>
                Green<span className={classes.quant}>(267)</span>
                <CheckBox name='green' checked={props.filters?.colour?.green} onChange={(e) => {
                  props.onSetFilter('colour', {
                    ...props.filters?.colour,
                    green: e.target.checked
                  })
                }} />
                <span className={classes.checkmark}></span>
              </label>
              {showMoreColor && (
                <>
                  <label className={classes.container}>
                    <span
                      style={{
                        backgroundColor: '#0F8FD7'
                      }}
                      className={classes.color}
                    ></span>
                    Blue<span className={classes.quant}>(467)</span>
                    <CheckBox name='blue' checked={props.filters?.colour?.blue} onChange={(e) => {
                      props.onSetFilter('colour', {
                        ...props.filters?.colour,
                        blue: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                  <label className={classes.container}>
                    <span
                      style={{
                        backgroundColor: '#FFD7B1'
                      }}
                      className={classes.color}
                    ></span>
                    Beige<span className={classes.quant}>(578)</span>
                    <CheckBox name='beige' checked={props.filters?.colour?.beige} onChange={(e) => {
                      props.onSetFilter('colour', {
                        ...props.filters?.colour,
                        beige: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                  <label className={classes.container}>
                    <span
                      style={{
                        backgroundColor: '#000'
                      }}
                      className={classes.color}
                    ></span>
                    Black<span className={classes.quant}>(465)</span>
                    <CheckBox name='black' checked={props.filters?.colour?.black} onChange={(e) => {
                      props.onSetFilter('colour', {
                        ...props.filters?.colour,
                        black: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                  <label className={classes.container}>
                    <span
                      style={{
                        backgroundColor: '#FFF'
                      }}
                      className={classes.color}
                    ></span>
                    White<span className={classes.quant}>(466)</span>
                    <CheckBox name='white' checked={props.filters?.colour?.white} onChange={(e) => {
                      props.onSetFilter('colour', {
                        ...props.filters?.colour,
                        white: e.target.checked
                      })
                    }} />
                    <span className={classes.checkmark}></span>
                  </label>
                </>
              )}
              <div
                className={classes.showMoreText}
                onClick={() => {
                  setShowMoreColor((prev) => !prev)
                }}
              >
                <p>{showMoreColor ? 'Show less' : '+ 12 more'}</p>
              </div>
            </div>
          </div>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsCraftExpanded((prev) => !prev)
          }}
        >
          <h2>Craft</h2>
          {isCraftExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isCraftExpanded}>
          <p>Craft</p>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsThemeExpanded((prev) => !prev)
          }}
        >
          <h2>Theme</h2>
          {isThemeExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isThemeExpanded}>
          <p>Theme</p>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsOccasionExpanded((prev) => !prev)
          }}
        >
          <h2>Occasion</h2>
          {isOccasionExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isOccasionExpanded}>
          <p>Occasion</p>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsOriginExpanded((prev) => !prev)
          }}
        >
          <h2>Origin</h2>
          {isOriginExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isOriginExpanded}>
          <p>Origin</p>
        </Collapse>
      </div>
      <div className={classes.collapseWrapper}>
        <div
          className={classes.top}
          onClick={() => {
            setIsZariExpanded((prev) => !prev)
          }}
        >
          <h2>Zari</h2>
          {isZariExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isZariExpanded}>
          <p>Zari</p>
        </Collapse>
      </div>
      <div className={`${classes.collapseWrapper} ${classes.last}`}>
        <div
          className={classes.top}
          onClick={() => {
            setIsCollectionExpanded((prev) => !prev)
          }}
        >
          <h2>Collection</h2>
          {isCollectionExpanded ? <MinusIcon /> : <PlusIcon />}
        </div>
        <Collapse isExpanded={isCollectionExpanded}>
          <p>Collection</p>
        </Collapse>
      </div>
    </div>
  )
}

export default Filters

const sortOptions = [
  { value: 'best-seller', label: 'Best seller' },
  { value: 'relevance', label: 'Relevance' },
  { value: 'price-low-to-high', label: 'Price (low to high)' },
  { value: 'price-high-to-low', label: 'Price (high to low)' },
  { value: 'new', label: 'New arrivals' },
  { value: 'popularity', label: 'Popularity' }
]
