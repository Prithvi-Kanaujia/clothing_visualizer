import { CircularTickIcon } from 'components/Icons/GenericIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import React from 'react'
import { useAppSelector } from 'store/hook'
import { selectCreateData } from 'store/showroom-slice'
import { ILayout } from 'ts/interfaces'
import { assetUrl } from 'utils/constants'

import classes from './LayoutItem.module.scss'

export interface ILayoutItemProps {
  noPreview?: boolean
  currentLayoutIndex: number
  item: ILayout
  onPresetIndexChange: (index: number) => void
  className?: string
  presetClassName?: string
  onPreviewClick?: () => void
}
const LayoutItem = ({
  noPreview,
  currentLayoutIndex,
  item,
  className,
  presetClassName,
  onPresetIndexChange,
  onPreviewClick
}: ILayoutItemProps) => {
  const { presetIndex, layoutIndex } = useAppSelector(selectCreateData)
  return (
    <div
      className={`${classes.wrapper} ${className ?? ''} to-center`}
      key={item.id}
    >
      {!noPreview && (
        <div className={classes.image}>
          <img src={`${assetUrl}/${item.preview}`} alt="preview" />
          {currentLayoutIndex === layoutIndex && (
            <Button className={classes.action} onClick={onPreviewClick}>
              Preview showroom
            </Button>
          )}
        </div>
      )}
      <ul className={`${classes.list} to-center`}>
        {item.presets.map((obj, i) => {
          const isSelected =
            presetIndex === i && layoutIndex === currentLayoutIndex
          return (
            <li
              key={obj.id + i}
              className={`${classes.preset} ${
                isSelected ? classes.active : ''
              } ${presetClassName ?? ''}`}
              onClick={() => onPresetIndexChange(i)}
            >
              <div className={`${classes.inner} to-center`}>
                {isSelected && <CircularTickIcon className={classes.tick} />}
                <div
                  className={classes.circle}
                  style={{
                    background: `linear-gradient(-45deg, ${obj.colors[0]} 50%,  ${obj.colors[1]} 50%)`
                  }}
                />
                <div className={`${classes.text} v-to-center`}>
                  <span className={classes.name}>{obj.name}</span>
                  <span className={classes.info}>{obj.info}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LayoutItem
