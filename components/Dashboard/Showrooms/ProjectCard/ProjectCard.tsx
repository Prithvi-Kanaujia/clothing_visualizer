import { PanelIconMap } from 'components/Icons/PanelIcons'
import React from 'react'
import { IPorject, IProjectAction } from 'ts/interfaces'
import { assetUrl } from 'utils/constants'

import classes from './ProjectCard.module.scss'
export interface IProjectCardProps {
  item: IPorject
  handleClick?: (id: string) => void
  onActionClick?: (item: IProjectAction) => void
}

const items = [
  {
    id: 'preview',
    icon: 'PreviewIcon',
    text: 'Preview'
  },
  {
    id: 'creator-mode',
    icon: 'CreatorIcon',
    text: 'Creator Mode'
  },
  {
    id: 'edit-details',
    icon: 'EditIcon',
    text: 'Edit details'
  },
  {
    id: 'delete',
    icon: 'DeleteIcon',
    text: 'Delete'
  },
  {
    id: 'settings',
    icon: 'SettingIcon',
    text: 'Settings'
  },
  {
    id: 'share',
    icon: 'ShareIcon',
    text: 'Share'
  }
]
const ProjectCard = ({
  item,
  handleClick,
  onActionClick
}: IProjectCardProps) => {
  return (
    <div
      className={`${classes.wrapper} v-to-center`}
      onClick={() => handleClick?.(item.id)}
    >
      <div className={classes.top}>
        <img src={`${assetUrl}/${item.image}`} alt="image" />
        {item.id !== 'create-new' && (
          <div className={classes.hoverd}>
            <div className={`${classes.content} v-to-center`}>
              <ul className={`${classes.list} v-to-center`}>
                {items.map((item) => {
                  const Icon = PanelIconMap[item.icon]
                  return (
                    <li
                      key={item.id}
                      className={`${classes.action} to-center`}
                      onClick={() => {
                        onActionClick?.(item)
                      }}
                    >
                      <span className={`${classes.icon} to-center`}>
                        <Icon />
                      </span>
                      {item.text}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={classes.text}>{item.name}</div>
    </div>
  )
}

export default ProjectCard
