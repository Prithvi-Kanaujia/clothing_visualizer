import React from 'react'
import { assetUrl } from 'utils/constants'

import classes from './ProgressLoader.module.scss'

const ProgressLoader = () => {
  return (
    <div className={`${classes['progress-loader']} v-to-center`}>
      <img src={`${assetUrl}/icons/progress-loader.gif`} />
      <p>Loading...</p>
    </div>
  )
}

export default ProgressLoader
