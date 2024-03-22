import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React from 'react'
import { setOpenExitPop } from 'store/editor-slice'
import { useAppDispatch } from 'store/hook'

import classes from './ConfirmExit.module.scss'

const ConfirmExit = () => {
  const dispatch = useAppDispatch()
  return (
    <div className={` ${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        hasClose
        onClose={() => {
          dispatch(setOpenExitPop(false))
        }}
        className={`${classes.content}  v-to-center`}
      >
        <h3>Are you sure you want to leave?</h3>
        <p>
          Save or build your showroom before you leave or else edits will not be
          saved
        </p>
        <div className={`${classes['confirm-btns']} to-center`}>
          <Button>LEAVE</Button>
          <Button>BUILD</Button>
        </div>
      </ModalPrimary>
    </div>
  )
}

export default ConfirmExit
