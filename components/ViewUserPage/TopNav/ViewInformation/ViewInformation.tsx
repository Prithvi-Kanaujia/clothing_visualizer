import { PanelIconMap } from 'components/Icons/PanelIcons'
import Popover from 'components/shared/Popover/Popover'
import React from 'react'

import classes from './ViewInformation.module.scss'

type ViewInformationProps = {
  onClose: () => void
}

const socialIcons = [
  { id: 0, icon: 'FBIcon', link: 'https://facebook.com' },
  { id: 1, icon: 'InstaIcon', link: 'https://instagram.com' },
  { id: 2, icon: 'TwitterIcon', link: 'https://twitter.com' },
  { id: 3, icon: 'YTIcon', link: 'https://youtube.com' }
]

const ViewInformation = ({ onClose }: ViewInformationProps) => {
  return (
    <div className={`${classes.wrapper}`}>
      <Popover
        isOpen={true}
        onClose={onClose}
        withCloseIcon
        contentClassName="user-content"
      >
        <div className={classes?.['content-wrapper']}>
          <div className={classes.row}>
            <h3 className={classes.title}>Name:</h3>
            <p className={classes.description}>Lorem ipsum dolor sit amet</p>
          </div>
          <div className={classes.row}>
            <h3 className={classes.title}>
              Description:
              <span className={`${classes.description} ${classes.spacing}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </span>
            </h3>
          </div>
          <div className={classes.row}>
            <h3 className={classes.title}>Mobile number:</h3>
            <p className={`${classes.description} ${classes?.['text-bold']}`}>
              9989090007
            </p>
          </div>
          <div className={classes.row}>
            <h3 className={classes.title}>Socials:</h3>
            <div className={classes.socials}>
              {socialIcons?.map(({ id, icon, link }) => {
                const Icon = PanelIconMap?.[icon]
                return (
                  <div className={classes.icon} key={id}>
                    <a
                      href={link}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      rel="noreferrer"
                    >
                      <Icon />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Popover>
    </div>
  )
}

export default ViewInformation
