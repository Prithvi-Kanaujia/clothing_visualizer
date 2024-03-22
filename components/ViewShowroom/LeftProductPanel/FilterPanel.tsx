import { CrossIcon, PlusIcon, TickIcon } from 'components/Icons/GenericIcons'
import React, { useState } from 'react'
import {
  selectMenyType,
  selectOpenFilter,
  setOpenFilter,
  setOpenMenu
} from 'store/editor-slice'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectSelectedFilters, setSelectedFilters } from 'store/product-slice'
import { IFilter } from 'ts/interfaces'
import { getMetadata } from 'utils/globals'

import classes from './LeftProductPanel.module.scss'

export const CollapseMenu = (item: any) => {
  const [openItem, setOpenItem] = useState(false)
  const menuType = useAppSelector(selectMenyType)
  const dispatch = useAppDispatch()
  const selectedFilters = useAppSelector(selectSelectedFilters)

  const isFilterApplied = (data: IFilter) => {
    let i
    for (i = 0; i < selectedFilters.length; i++) {
      if (selectedFilters[i] === data) {
        return true
      }
    }

    return false
  }

  return (
    <div
      className={`${classes.specset} ${openItem ? classes.openmenu : ''} ${
        menuType === 'mannequins' ? `${classes.manspecset}` : ''
      } v-to-center`}
    >
      <div
        className={`${
          menuType === 'mannequins' ? `${classes.manspechead} disabled` : ''
        } ${classes.spechead} to-center`}
        onClick={() => {
          setOpenItem((prev) => !prev)
        }}
      >
        <div className={'to-center'}>{item.item.heading}</div>
        <PlusIcon className={openItem ? 'rotate-45' : ''} />
      </div>
      {openItem &&
        item.item.list.map((data: IFilter, index1: any) => {
          return (
            <div
              className={`${classes.specitem} ${
                menuType === 'mannequins' ? classes.manspecitem : ''
              } to-center`}
              key={index1}
            >
              <div className={`${classes.datacontent} `}>
                <div className={`${classes.checkbox} to-center`}>
                  <div
                    className={`${classes.box} ${
                      isFilterApplied(data) ? classes.ticked : ''
                    }
                    to-center`}
                    onClick={() => {
                      dispatch(setSelectedFilters(data))
                    }}
                  >
                    {isFilterApplied(data) && <TickIcon color={'black'} />}
                  </div>
                  <div>{`${data.name} (${data.amount})`}</div>
                </div>
              </div>
              {menuType === 'mannequins' && (
                <div className={`${classes.colorboxes} to-center`}>
                  <div className={`${classes.blackbox} to-center`}>
                    <div></div>
                  </div>
                  <div className={`${classes.whitebox} to-center`}>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

const FilterPanel = () => {
  const openFilter = useAppSelector(selectOpenFilter)
  const selectedFilters = useAppSelector(selectSelectedFilters)
  const { filters } = getMetadata()
  const dispatch = useAppDispatch()
  return (
    <div
      className={`${classes['panel-wrap']} ${
        openFilter ? classes.openmenu : ''
      } v-to-center`}
    >
      <h2
        onClick={() => {
          dispatch(setOpenFilter(false))
          dispatch(setOpenMenu(true))
        }}
      >
        Filter
      </h2>
      <div className={`${classes.filterselected} to-center`}>
        {selectedFilters.map((filter, index) => {
          return (
            <div key={index} className={`${classes.filteritem} to-center`}>
              {filter.name}
              <div
                onClick={() => dispatch(setSelectedFilters(filter))}
                style={{ cursor: 'pointer' }}
              >
                <CrossIcon backgroundColor="none" color="white" />
              </div>
            </div>
          )
        })}
      </div>
      <div className={`${classes['filter-head']} v-to-center`}>
        {filters.map((filterhead, index) => {
          return <CollapseMenu item={filterhead} key={index} />
        })}
      </div>
    </div>
  )
}

export default FilterPanel
