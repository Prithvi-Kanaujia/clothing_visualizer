import ConfigProvider from 'antd/es/config-provider'
import Switch from 'antd/lib/switch'
import { EditIcon } from 'components/Icons/GenericIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import { InputPrimary } from 'components/shared/Inputs/Inputs'
import ModalPrimary from 'components/shared/Modals/Modals'
import React, { Fragment, useState } from 'react'
import { useAppDispatch } from 'store/hook'
import { setShowProfile } from 'store/profile-slice'

import classes from './Profile.module.scss'

const profileInfo = [
  {
    id: 'name',
    label: 'Name',
    icon: 'NameIcon'
  },
  {
    id: 'dob',
    label: 'Date of Birth',
    icon: 'DobIcon'
  },
  {
    id: 'email',
    label: 'Email',
    icon: 'EmailIcon'
  },
  {
    id: 'phone',
    label: 'Phone Number',
    icon: 'PhoneIcon'
  }
]

const socialInfo = [
  {
    id: 'insta',
    label: 'Instagram',
    icon: 'InstaIcon'
  },
  {
    id: 'youtube',
    label: 'YoutTube',
    icon: 'YTIcon'
  },
  {
    id: 'fb',
    label: 'Facebook',
    icon: 'FBIcon'
  },
  {
    id: 'twitter',
    label: 'Twitter',
    icon: 'TwitterIcon'
  }
]

export interface ProfileProps {
  editor?: boolean
}

const Profile = ({ editor }: ProfileProps) => {
  const dispatch = useAppDispatch()
  const handleClose = () => {
    dispatch(setShowProfile(false))
  }
  const [disableInputs, setDisableInputs] = useState(true)
  return (
    <div
      className={` ${
        editor ? classes['wrapper-new'] : classes.wrapper
      } cover-absolute to-center`}
    >
      <ModalPrimary
        hasClose
        onClose={handleClose}
        className={`${classes.content}  v-to-center`}
      >
        {!editor && <h2 className={classes.title}>Profile</h2>}
        {editor && <h2 className={classes.title}>Showroom Information</h2>}
        <div className={`${classes['data-wrapper']}  v-to-center`}>
          <div className={`${classes.topedit} container to-center`}>
            {!editor && <p>Personal Information</p>}
            {disableInputs && (
              <div
                className={classes.edit}
                onClick={() => setDisableInputs(false)}
              >
                <EditIcon /> Edit
              </div>
            )}
          </div>
          <div
            className={`${
              editor ? classes['personal-details'] : classes.contactinfo
            } `}
          >
            {!editor &&
              profileInfo.map((field, index) => {
                return (
                  <InputPrimary
                    label={field.label}
                    placeholder="Label your showroom"
                    icon={field.icon}
                    // value={name}
                    // onChange={(e) => handleChange('name', e.target.value)}
                    key={index}
                    disabled={disableInputs}
                  />
                )
              })}
            {editor && (
              <InputPrimary label={'Name*'} placeholder="Label your showroom" />
            )}
          </div>
          {!editor && (
            <InputPrimary
              label={'Address'}
              placeholder="Enter your address"
              icon="AddressIcon"
              // value={name}
              // onChange={(e) => handleChange('name', e.target.value)}
              multiline={true}
              disabled={disableInputs}
            />
          )}
          {editor && (
            <InputPrimary
              label={'Description'}
              placeholder="Enter your Description"
              // value={name}
              // onChange={(e) => handleChange('name', e.target.value)}
              multiline={true}
            />
          )}
          {editor && (
            <InputPrimary label={'Phone'} placeholder="Phone Number" />
          )}
          <div className="container">
            <p>Contact Information</p>
          </div>
          <div className={`${classes.showsocial} to-center`}>
            <ConfigProvider
              theme={{
                components: {
                  Switch: {
                    colorPrimary: '#626CCE'
                  }
                }
              }}
            >
              <Switch />
            </ConfigProvider>
            Your customers can see your social presence
          </div>
          <div className={`${classes.contactinfo} `}>
            {socialInfo.map((field, index) => {
              return (
                <InputPrimary
                  label={field.label}
                  placeholder="Socials"
                  icon={field.icon}
                  // value={name}
                  // onChange={(e) => handleChange('name', e.target.value)}
                  key={index}
                />
              )
            })}
          </div>
        </div>
        <div className={`${classes.footcta} to-center`}>
          {<div className={classes.contract}>View Contract</div>}
          {!disableInputs && !editor && <Button>Save</Button>}
          {editor && <Button>Done</Button>}
        </div>
      </ModalPrimary>
    </div>
  )
}

export default Profile
