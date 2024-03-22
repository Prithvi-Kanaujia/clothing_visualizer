import { PanelIconMap } from 'components/Icons/PanelIcons'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectActiveTab, setActiveTab } from 'store/panel-slice'

import classes from './Panel.module.scss'
const items = [
  {
    id: 'showrooms',
    text: 'Showrooms',
    icon: 'ShowroomIcon'
  },
  {
    id: 'analytics',
    text: 'Analytics',
    icon: 'AnalyticsIcon'
  },
  {
    id: 'overview',
    text: 'Overview',
    icon: 'OverviewIcon'
  },
  {
    id: 'help',
    text: 'Help',
    icon: 'HelpIcon'
  }
]
const Panel = () => {
  const selected = useAppSelector(selectActiveTab)
  const dispatch = useAppDispatch()
  const handleChange = (index: number) => {
    if (index === selected) return
    dispatch(setActiveTab(index))
  }

  return (
    <div className={classes.wrapper}>
      <ul className={classes.list}>
        {items.map((item, i) => {
          const Icon = PanelIconMap[item.icon]
          const isActive = i === selected
          return (
            <li
              key={item.id}
              className={`${classes.item} ${
                isActive ? classes.active : ''
              } to-center`}
              onClick={() => handleChange(i)}
            >
              <Icon color={isActive ? '#303030' : '#ffffff'} />
              <span>{item.text}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Panel
