import { Typography } from '@mui/material'
import { VirtualAssistantIcon } from 'components/Icons/EditorViewIcons'
import React from 'react'

import classes from './IconSection.module.scss'

function IconSection() {
  return (
    <div className={classes['icon-text']}>
      <div className={classes.icon}>
        <VirtualAssistantIcon />
      </div>
      <div className={classes.text}>
        <Typography style={{ fontSize: '14px', color: '#CECECE' }}>
          100% Cotton
        </Typography>
      </div>
    </div>
  )
}

export default IconSection
