import classes from 'components/Dashboard/Showrooms/CreateShowroom/CreateShowroom.module.scss'
import { InputPrimary } from 'components/shared/Inputs/Inputs'
import React from 'react'
import { assetUrl } from 'utils/constants'
export interface IShowroomInformationProps {
  name: string
  description: string
  preview: string
  handleChange: (key: string, value: string) => void
}
const ShowroomInformation = ({
  name,
  description,
  preview,
  handleChange
}: IShowroomInformationProps) => {
  return (
    <div
      className={`${classes.container} ${classes['showroom-information']} v-to-center`}
    >
      <div className={`${classes['preview-wrapper']} v-to-center`}>
        <div className={`${classes['logo-wrapper']} to-center`}>
          <img
            className={classes.logo}
            src={`${assetUrl}/images/logo.png`}
            alt="logo"
          />
        </div>

        <img
          className={classes.main}
          src={`${assetUrl}/${preview}`}
          alt="preview"
        />
      </div>
      <div className={`${classes.inputs} v-to-center`}>
        <InputPrimary
          label="Name*"
          placeholder="Label your showroom"
          value={name}
          onChange={(e) => handleChange('name', e.target.value)}
        />
        <InputPrimary
          label="Description"
          multiline
          rows={2.5}
          value={description}
          onChange={(e) => handleChange('description', e.target.value)}
          placeholder="Increase engagement by adding information about your showroom"
        />
      </div>
    </div>
  )
}

export default ShowroomInformation
