import { CrossIcon } from 'components/Icons/GenericIcons'
import React from 'react'

import classes from './Modals.module.scss'
export interface IModalPrimaryProps {
  className?: string
  hasClose?: boolean
  onClose?: () => void
  hasDarkIcon?: boolean
  children?: React.ReactNode
}
const ModalPrimary = ({
  className,
  children,
  hasClose,
  onClose,
  hasDarkIcon
}: IModalPrimaryProps) => {
  return (
    <div className={`${classes['background-wrap']} cover-absolute v-to-center`}>
      <div className={`${classes.wrapper} ${className ?? ''}`}>
        {hasClose && (
          <button
            className={`${classes.close} ${
              hasDarkIcon ? classes.dark : ''
            } to-center`}
            onClick={onClose}
          >
            <CrossIcon
              {...(hasDarkIcon && {
                backgroundColor: 'transparent',
                color: 'white'
              })}
            />
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

export default ModalPrimary
