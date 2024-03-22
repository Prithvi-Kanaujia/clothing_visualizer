import { Button, ButtonSecondary } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import {
  selectDeleteShowroomId,
  selectShowrooms,
  setDeleteShowroomId,
  setShowrooms
} from 'store/showroom-slice'

import classes from './DeleteConfirmation.module.scss'
const DeleteConfirmation = () => {
  const id = useAppSelector(selectDeleteShowroomId)
  const showrooms = useAppSelector(selectShowrooms)
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(setDeleteShowroomId(''))
  }
  const handleCancel = () => {
    dispatch(setDeleteShowroomId(''))
  }
  const handleConfirm = () => {
    const filtered = showrooms.filter((item) => item.id !== id)
    dispatch(setShowrooms([...filtered]))
    dispatch(setDeleteShowroomId(''))
  }
  const showroom = showrooms.find((item) => item.id === id)
  return (
    <div className={`${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        hasClose
        onClose={handleClose}
        className={`${classes.content} v-to-center`}
      >
        <h2 className={classes.title}>
          Are you sure you want to delete {showroom.name}?
        </h2>
        <p className={classes.info}>
          Once deleted, your showroom cannot be recovered!
        </p>
        <div className={`${classes.actions} to-center`}>
          <ButtonSecondary className={classes.action} onClick={handleCancel}>
            CANCEL
          </ButtonSecondary>
          <Button className={classes.action} onClick={handleConfirm}>
            YES
          </Button>
        </div>
      </ModalPrimary>
    </div>
  )
}

export default DeleteConfirmation
