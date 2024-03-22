import ModalPrimary from 'components/shared/Modals/Modals'
import React, { useState } from 'react'
import { selectTutIndex, setTutIndex } from 'store/editor-slice'
import { useAppDispatch, useAppSelector } from 'store/hook'

import classes from './OnBoardTut.module.scss'

const tutContent = [
  {
    id: 1,
    Name: 'Edit showroom and social info'
  },
  {
    id: 2,
    Name: 'Add music to your showroom'
  },
  {
    id: 3,
    Name: 'Preview your showroom'
  },
  {
    id: 4,
    Name: 'Publish your showroom to share'
  }
]

const OnBoardTut = () => {
  //   const [tutIndex, setTutIndex] = useState(1)
  const tutIndex = useAppSelector(selectTutIndex)
  const dispatch = useAppDispatch()

  return (
    <div className={`${classes.wrapper} cover-absolute`}>
      <div className={`${classes['tut-dialog']}`}>
        <div className={`${classes['tut-desc']}`}>
          {tutContent[tutIndex - 1]?.Name}
          <div
            className={classes.tutprogress}
            style={{ width: `${(tutIndex / 4) * 100}%` }}
          ></div>
        </div>

        <div className={`${classes['tut-nav']} to-center`}>
          <p style={{ color: 'var(--titan-grey)' }}>SKIP</p>
          <p
            onClick={() => {
              dispatch(setTutIndex(tutIndex + 1))
            }}
          >
            NEXT
          </p>
        </div>
      </div>
    </div>
  )
}

export default OnBoardTut
