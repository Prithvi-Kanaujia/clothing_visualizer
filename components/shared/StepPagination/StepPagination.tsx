import React from 'react'

import classes from './StepPagination.module.scss'
export interface IStepPaginationProps {
  className?: string
  steps: number
  currentStepIndex: number
  fill?: boolean
  onChange?: (step: number) => void
}
const StepPagination = ({
  className,
  steps,
  fill,
  currentStepIndex,
  onChange
}: IStepPaginationProps) => {
  return (
    <div className={`${classes.wrapper} ${className ?? ''} v-to-center`}>
      <p className={classes.text}>STEP {currentStepIndex + 1}</p>
      <div className={`${classes.steps} to-center`}>
        {Array.from(Array(steps).keys()).map((step) => {
          const isActive = fill
            ? step <= currentStepIndex
            : step === currentStepIndex
          return (
            <span
              key={step}
              className={`${classes.step} ${isActive ? classes.active : ''} ${
                onChange ?? '' ? classes.clickable : ''
              }}`}
              onClick={() => onChange?.(step)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default StepPagination
