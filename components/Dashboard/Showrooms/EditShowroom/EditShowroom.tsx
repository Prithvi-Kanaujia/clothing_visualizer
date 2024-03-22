import ShowroomInformation from 'components/Dashboard/Showrooms/ShowroomInformation/ShowroomInformation'
import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import {
  selectShowrooms,
  setEditShowroomId,
  setShowrooms
} from 'store/showroom-slice'

import classes from './EditShowroom.module.scss'
export interface IEditShowroomProps {
  id: string
}
const EditShowroom = ({ id }: IEditShowroomProps) => {
  const showrooms = useAppSelector(selectShowrooms)
  const showroom = showrooms.find((showroom) => showroom.id === id)
  const [data, setData] = useState({
    name: showroom?.name || '',
    description: showroom?.description || ''
  })
  const dispatch = useAppDispatch()
  const handleChange = (key: 'name' | 'description', value: string) => {
    setData({ ...data, [key]: value })
  }
  const handleClose = () => {
    dispatch(setEditShowroomId(''))
  }
  const handleSave = () => {
    const temp = { ...showroom, ...data }
    const index = showrooms.findIndex((showroom) => showroom.id === id)
    const tempShowrooms = [...showrooms]
    tempShowrooms[index] = temp
    dispatch(setShowrooms([...tempShowrooms]))
    dispatch(setEditShowroomId(''))
  }

  if (!showroom) return null

  const { image } = showroom
  const isDisabled = !data.name

  return (
    <div className={`${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        className={`${classes.content} v-to-center`}
        hasClose
        onClose={handleClose}
      >
        <div className={`${classes.top} v-to-center`}>
          <h2 className={classes.title}>Showroom information</h2>
          <ShowroomInformation
            name={data.name}
            description={data.description}
            handleChange={handleChange}
            preview={image}
          />
        </div>
        <div className={`${classes['submit-wrapper']} to-center`}>
          <Button
            className={classes.action}
            onClick={handleSave}
            disabled={isDisabled}
          >
            SAVE
          </Button>
        </div>
      </ModalPrimary>
    </div>
  )
}

export default EditShowroom
