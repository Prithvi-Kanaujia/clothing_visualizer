import { LinkIcon } from 'components/Icons/GenericIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowShare } from 'store/showroom-slice'
import { assetUrl } from 'utils/constants'
import { copyText } from 'utils/copy'
import {
  shareOnFacebook,
  shareOnLinkedIn,
  shareOnNavigator,
  shareOnTwitter
} from 'utils/share'

import classes from './Share.module.scss'
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
const Share = () => {
  const dispatch = useDispatch()
  const url = window.location.href

  const onClose = () => {
    dispatch(setShowShare(false))
  }
  const handleShareDesktop = (id: string) => {
    switch (id) {
      case 'twitter': {
        shareOnTwitter(url, { title: 'Check out this awesome showroom' })
        break
      }
      case 'facebook': {
        shareOnFacebook(url)
        break
      }
      case 'linkedin': {
        shareOnLinkedIn(url, { title: 'Check out this awesome showroom' })
        break
      }
    }
  }
  const handleShareMobile = () => {
    shareOnNavigator({ url, title: 'Check out this awesome showroom' })
  }
  const hanleShare = (id: string) => {
    if (navigator.share) {
      handleShareMobile()
    } else {
      handleShareDesktop(id)
    }
    dispatch(setShowShare(false))
  }

  return (
    <div className={`${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        hasClose
        onClose={onClose}
        className={`${classes.content} v-to-center`}
      >
        <h2 className={classes.title}>Share</h2>
        <div className={`${classes['share-options']} to-center`}>
          {shareOptions.map((ob) => {
            return (
              <span
                key={ob.id}
                className={classes.option}
                onClick={() => hanleShare(ob.id)}
              >
                <img src={`${assetUrl}/${ob.icon}`} alt={ob.name} />
              </span>
            )
          })}
        </div>
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
      </ModalPrimary>
    </div>
  )
}

export default Share
