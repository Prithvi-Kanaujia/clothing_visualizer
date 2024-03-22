import Switch from 'antd/lib/switch'
import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React from 'react'
import { setOpenPublishPop } from 'store/editor-slice'
import { useAppDispatch } from 'store/hook'
import { assetUrl } from 'utils/constants'

import classes from './PublishShowroom.module.scss'

const PublishShowroom = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={` ${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        hasClose
        onClose={() => {
          dispatch(setOpenPublishPop(false))
        }}
        className={`${classes.content}  v-to-center`}
      >
        <h3>Publish your showroom</h3>
        <p>Publishing your showroom will make your showroom visible</p>

        <div className={`${classes.expertwrap} v-to-center`}>
          <div className={`${classes.toggle} to-center`}>
            <Switch />
            Enable product expert feature to enhance your showroom experience
          </div>
          <div className={`${classes.expert} to-center`}>
            <div className={classes.expertimg}>
              <img src={`${assetUrl}/images/vscexpert.jpeg`} alt="" />
            </div>
            <div className={`${classes.expertdesc} v-to-center`}>
              <h3>Product expert</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className={`${classes.publishbtn} to-center`}>
          <Button>Publish</Button>
        </div>
      </ModalPrimary>
    </div>
  )
}

export default PublishShowroom
