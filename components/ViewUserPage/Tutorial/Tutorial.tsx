import { RightArrowIcon } from 'components/Icons/GenericIcons'
import * as React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectTutorialIndex, setTutorialIndex } from 'store/user-slice'

import classes from './Tutorial.module.scss'

const Tutorial = () => {
  const tutorialIndex = useAppSelector(selectTutorialIndex)
  const dispatch = useAppDispatch()
  return tutorialIndex < 2 ? (
    <div
      className={`${classes.dialog} ${
        tutorialIndex === 0 ? classes?.['top-left'] : classes?.['bottom-right']
      }`}
    >
      {tutorialIndex === 0 && (
        <div className={classes?.['upside-arrow']}>
          <TrianglePolygon direction="up" />
        </div>
      )}
      <div className={classes.top}>
        <p className={classes.index}>{tutorialIndex + 1}/2</p>
        <p className={classes.title}>
          {['Talk to our product expert', 'Quick navigation'][tutorialIndex]}
        </p>
        <div className={classes.divider} />
      </div>
      <div
        className={`${classes?.['action-btns']} ${
          tutorialIndex === 1 ? classes.end : ''
        }`}
      >
        {tutorialIndex === 0 && (
          <>
            <p
              className={classes.skip}
              onClick={() => {
                dispatch(setTutorialIndex(2))
              }}
            >
              SKIP
            </p>
            <p
              className={`${classes.next} to-center`}
              onClick={() => {
                dispatch(setTutorialIndex(1))
              }}
            >
              NEXT <RightArrowIcon />
            </p>
          </>
        )}
        {tutorialIndex === 1 && (
          <p
            className={classes.next}
            onClick={() => {
              dispatch(setTutorialIndex(2))
            }}
          >
            DONE
          </p>
        )}
      </div>
    </div>
  ) : null
}

export default Tutorial

const TrianglePolygon = ({ direction }: { direction: 'up' | 'down' }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        points={direction === 'up' ? '6,0 12,12 0,12' : '0,0 12,0 6,12'}
        fill="black"
        fillOpacity="0.5"
      />
    </svg>
  )
}
