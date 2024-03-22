import { PanelIconMap } from 'components/Icons/PanelIcons'
import React, { useId } from 'react'

import classes from './Inputs.module.scss'
export interface IInputPrimaryProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string
  rows?: number
  multiline?: boolean
  icon?: string
}
export const InputPrimary = ({
  label,
  id,
  type,
  multiline,
  rows,
  icon,
  ...otherProps
}: IInputPrimaryProps) => {
  const identifier = id ?? useId()
  const Icon = PanelIconMap?.[icon]
  return (
    <div className={`${classes.wrapper} v-to-center`}>
      <label className={classes.label} htmlFor={identifier}>
        {label}
      </label>
      <div
        className={`${classes.iconinput} ${
          icon ? classes['has-icon'] : ''
        } to-center`}
      >
        {icon && (
          <div className={`${classes.iconcomp}`}>
            <Icon />
          </div>
        )}
        {!multiline && (
          <input
            className={classes.input}
            type={type ?? 'text'}
            id={identifier}
            {...otherProps}
          />
        )}
        {multiline && (
          <textarea
            className={`${classes.input} ${classes.textarea}}`}
            id={identifier}
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
            style={{ height: rows ? `${rows * 40}px` : 'auto' }}
            {...otherProps}
          />
        )}
      </div>
    </div>
  )
}
