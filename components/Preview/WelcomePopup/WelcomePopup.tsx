import Card from 'components/Preview/base/card/Card'
import React, { useContext } from 'react'
import UIContext from 'store/ui-context'
import { assetUrl } from 'utils/constants'
import { GlobalVariables } from 'utils/globals'

import classes from './WelcomePopup.module.scss'

interface inProps {
  onClick?: () => void
}
const WelcomePopup = ({ onClick }: inProps) => {
  const handleMuteStateToggle = useContext(UIContext).handleMuteStateToggle
  const handleHideAudioIcon = useContext(UIContext).handleHideAudioIcon

  const handleClose = () => {
    const audio = GlobalVariables.musicAudio
    if (!audio.hide) {
      audio.play()
      handleMuteStateToggle()
    } else {
      handleHideAudioIcon()
    }

    onClick?.()
  }
  return (
    <Card
      onClose={() => {
        handleClose()
      }}
      style={{
        width: 922,
        height: 605,
        maxWidth: '95%',
        maxHeight: '95%'
      }}
    >
      <div className={classes['welcome-popup']}>
        <p className={classes.heading}>Guidelines</p>
        <div className={classes.cards}>
          <div className={`${classes.card}`}>
            <div className={`${classes.image} to-center`}>
              <img src={assetUrl + '/gifs/tutorial-1.gif'} />
            </div>
            <p className={classes.text}>
              Click on the jumper point to navigate.
            </p>
          </div>
          <div className={`${classes.card}`}>
            <div className={`${classes.image} to-center`}>
              <img src={assetUrl + '/gifs/tutorial-2.gif'} />
            </div>
            <p className={classes.text}>
              Click on the hotspot to view the product.
            </p>
          </div>
          <div className={`${classes.card}`}>
            <div className={`${classes.image} to-center`}>
              <img src={assetUrl + '/gifs/tutorial-3.gif'} />
            </div>
            <p className={classes.text}>
              Click on Virtual Try-on to interact with the jewellry
            </p>
          </div>
          <div className={`${classes.card}`}>
            <div className={`${classes.image} to-center`}>
              <img src={assetUrl + '/gifs/tutorial-4.gif'} />
            </div>
            <p className={classes.text}>
              Click on Saree Visualizer to interact with the saree
            </p>
          </div>
        </div>
        <div
          className={`${classes['get-started']} to-center`}
          onClick={() => {
            handleClose()
          }}
        >
          <p>GET STARTED</p>
        </div>
      </div>
    </Card>
  )
}

export default WelcomePopup
