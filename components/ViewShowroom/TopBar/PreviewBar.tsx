import { InfoIcon } from 'components/Icons/EditorViewIcons'
import React from 'react'

import classes from './PreviewBar.module.scss'

const PreviewBar = () => {
  return (
    <div className={`${classes.previewbar} to-center`}>
      <InfoIcon />
      You are previewing your last built showroom, click on “BUILD” on edit mode
      for previewing latest built
    </div>
  )
}

export default PreviewBar
