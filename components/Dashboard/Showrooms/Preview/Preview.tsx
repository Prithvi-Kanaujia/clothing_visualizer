import classes from 'components/Dashboard/Showrooms/CreateShowroom/CreateShowroom.module.scss'
import LayoutItem from 'components/Dashboard/Showrooms/CreateShowroom/LayoutItem/LayoutItem'
import { ArrowButton } from 'components/shared/Buttons/Buttons'
import { TypographyPrimary } from 'components/shared/Typography/Typography'
import React from 'react'
import { ILayout } from 'ts/interfaces'
import { assetUrl } from 'utils/constants'

import previewClasses from './Preview.module.scss'
export interface IPreviewProps {
  layout: ILayout
  layoutIndex: number
  totalLayouts: number
  handeLayoutPrevNext: (val: number) => void
  handleChange?: (key: string, val: number) => void
}
const Preview = ({
  layout,
  layoutIndex,
  totalLayouts,
  handeLayoutPrevNext,
  handleChange
}: IPreviewProps) => {
  return (
    <div
      className={`${classes.top} ${classes['preview-project']} ${previewClasses.wrapper} v-to-center`}
    >
      <h2 className={classes.title}>Showroom preview</h2>
      <div className={classes['preview-container']}>
        <img src={`${assetUrl}/${layout.preview}`} alt="preview" />
      </div>
      <div className={`${classes.actions} to-center`}>
        <ArrowButton
          orientation="left"
          onClick={() => handeLayoutPrevNext(-1)}
        />
        <span className={classes.page}>{`${
          layoutIndex + 1
        }/${totalLayouts} Layouts`}</span>
        <ArrowButton onClick={() => handeLayoutPrevNext(1)} />
      </div>
      <TypographyPrimary
        className="cover-width"
        title="Preset selection"
        subTitle="Select one theme for your showroom"
      />
      <LayoutItem
        noPreview
        item={layout}
        currentLayoutIndex={layoutIndex}
        onPresetIndexChange={(val) => {
          handleChange('presetIndex', val)
        }}
        presetClassName={classes['preset-secondary']}
      />
    </div>
  )
}

export default Preview
