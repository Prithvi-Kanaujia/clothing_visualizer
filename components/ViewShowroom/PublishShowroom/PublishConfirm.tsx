/* jscpd:ignore-start */

import { GreenTickIcon } from 'components/Icons/EditorViewIcons'
import { LinkIcon } from 'components/Icons/GenericIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React from 'react'
import { setOpenPublishFinish } from 'store/editor-slice'
import { useAppDispatch } from 'store/hook'
import { assetUrl } from 'utils/constants'
import { copyText } from 'utils/copy'

import classes from './PublishConfirm.module.scss'

const shareOptions = [
  {
    id: 'twitter',
    name: 'Twitter',
    icon: 'icons/twitter.svg'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    icon: 'icons/facebook.svg'
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    icon: 'icons/linkedin.svg'
  }
]

const PublishConfirm = () => {
  const dispatch = useAppDispatch()
  const url = window.location.href

  return (
    <div className={` ${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        hasClose
        onClose={() => {
          dispatch(setOpenPublishFinish(false))
        }}
        className={`${classes.content}  v-to-center`}
      >
        <div className={`${classes.publishedimg} v-to-center`}>
          <div className={`${classes.imghead} to-center`}>
            <GreenTickIcon /> Your showroom is published!
          </div>
          <div className={classes['preview-img']}>
            <img src={`${assetUrl}/images/dummy-layout.jpg`} alt="" />
          </div>
        </div>

        <div className={`${classes.sharecomp} v-to-center`}>
          <div className={`${classes['link-wrapper']} v-to-center`}>
            <div className={`${classes.info} to-center`}>
              <LinkIcon /> Anyone with the link can view
            </div>
            <div className={`${classes.link} to-center`}>
              <input type="text" defaultValue={url} disabled />
              <Button className={classes.action} onClick={() => copyText(url)}>
                Copy
              </Button>
            </div>
          </div>
          <div className={`${classes['share-options']} to-center`}>
            <p>Share:</p>
            {shareOptions.map((ob) => {
              return (
                <span
                  key={ob.id}
                  className={classes.option}
                  //   onClick={() => hanleShare(ob.id)}
                >
                  <img src={`${assetUrl}/${ob.icon}`} alt={ob.name} />
                </span>
              )
            })}
          </div>
        </div>
      </ModalPrimary>
    </div>
  )
}

export default PublishConfirm

/* jscpd:ignore-end */
