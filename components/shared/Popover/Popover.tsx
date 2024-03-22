import { ExpandIcon } from 'components/Icons/EditorViewIcons'
import { CrossIcon, RetractIcon } from 'components/Icons/GenericIcons'
import { useOutsideClick } from 'hooks/useOutSideClick'
import * as React from 'react'
import ReactDOM from 'react-dom'

import classes from './Popover.module.scss'

type PopoverProps = {
  contentClassName?: string
  children?: React.ReactNode
  withCloseIcon?: boolean
  withRetractIcon?: boolean
  withExpandIcon?: boolean
  isOpen: boolean
  onClose: () => void
}

const Popover = ({
  contentClassName = '',
  withCloseIcon,
  withExpandIcon,
  isOpen,
  withRetractIcon,
  children,
  onClose
}: PopoverProps) => {
  const $popoverRef = React.useRef()
  const $overlayRef = React.useRef()

  useOutsideClick($overlayRef, onClose, $popoverRef, isOpen)

  return (
    <React.Fragment>
      {isOpen &&
        ReactDOM.createPortal(
          <div className="cover-absolute" ref={$overlayRef}>
            <div
              className={`${classes.content} ${classes?.[contentClassName]}`}
              ref={$popoverRef}
            >
              {withRetractIcon && (
                <button
                  className={`${classes['retract-icon']} to-center`}
                  onClick={onClose}
                >
                  <RetractIcon backgroundColor="transparent" color="white" />
                </button>
              )}
              {withExpandIcon && (
                <button
                  className={`${classes.close} to-center`}
                  onClick={onClose}
                >
                  <ExpandIcon />
                </button>
              )}
              {withCloseIcon && (
                <button
                  className={`${classes.close} to-center`}
                  onClick={onClose}
                >
                  <CrossIcon backgroundColor="transparent" color="white" />
                </button>
              )}
              {children}
            </div>
          </div>,
          $root
        )}
    </React.Fragment>
  )
}

const $root = document.getElementById('metadome')

export default Popover
