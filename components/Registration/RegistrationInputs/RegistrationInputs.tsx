import React from 'react'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'store/hook'
import {
  selectRegisterState,
  setBlurredOnce,
  setEmailError,
  setMobileError,
  setUserRegData
} from 'store/register-slice'
import { getMetadata } from 'utils/globals'

import classes from './RegistrationInputs.module.scss'

export interface InProps {
  stepCount: number
  userRegData: { [id: string]: string }
  setUserRegData: React.Dispatch<
    React.SetStateAction<{
      [id: string]: string
    }>
  >
}

const RegistrationInputs = () => {
  const { 'login-fields': loginFields } = getMetadata()
  const { stepCount, userRegData, blurredOnce, mobileError, emailError } =
    useAppSelector(selectRegisterState)
  const stepCountItem = loginFields[stepCount]
  const dispatch = useDispatch()

  const key = stepCountItem.id
  const showTextInput =
    stepCountItem.action === 'input' && stepCountItem.type === 'text'
  const showMobileInput =
    stepCountItem.action === 'input' && stepCountItem.type === 'number'

  const validate = (object: string) => {
    if (key === 'email') {
      if (object) {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (reg.test(userRegData.email) === false) {
          setEmailError('Please provide valid email')
        } else {
          setEmailError('')
        }
      } else {
        setEmailError('Please enter email')
      }
    } else if (key === 'mobile') {
      object
        ? isPossiblePhoneNumber(object)
          ? setMobileError('')
          : setMobileError('Invalid number')
        : setMobileError('Please enter phone number')
    } else if (key === 'name') {
      object ? setEmailError('') : setEmailError('Please enter your name')
    }
  }

  const handleEntry = (entry: string) => {
    dispatch(setUserRegData({ [key]: entry }))
    if (blurredOnce) validate(entry)
  }

  return (
    <div className={classes.inputwrapper}>
      <label htmlFor={stepCountItem.id}>{stepCountItem.name}</label>
      <div>{stepCountItem.subname}</div>
      {showTextInput && (
        <div>
          <input
            type={stepCountItem.type}
            placeholder={stepCountItem.name}
            id={stepCountItem.id}
            value={userRegData[key] || ''}
            onChange={(e) => {
              handleEntry(e.target.value)
            }}
            onBlur={() => {
              validate(userRegData[key])
              dispatch(setBlurredOnce(true))
            }}
          />
          <span className={classes['text-danger']}>{emailError}</span>
        </div>
      )}

      {showMobileInput && (
        <div className={`${classes.phonefield}`}>
          <PhoneInput
            className={`${classes.PhoneInput} to-center`}
            defaultCountry={'IN'}
            placeholder={'Phone Number'}
            international
            id="phone"
            value={userRegData[key] || ''}
            onChange={(e) => {
              if (e) {
                handleEntry(e)
              }
            }}
            onBlur={() => {
              validate(userRegData.mobile)
              dispatch(setBlurredOnce(true))
            }}
          />
          <span className={classes['text-danger']}>{mobileError}</span>
        </div>
      )}

      {stepCountItem.action === 'textarea' && (
        <textarea
          placeholder="About you"
          id="description"
          onChange={(e) => {
            handleEntry(e.target.value)
          }}
        />
      )}

      {stepCountItem.action === 'select' && (
        <div
          className={`${classes['select-grid']} ${
            stepCountItem.id === 'describe' ? classes['modify-grid'] : ''
          }`}
        >
          {stepCountItem['option-list'].map((option, index) => {
            return (
              <div
                className={`${classes['option-card']} ${
                  userRegData[key] === option ? classes.selected : ''
                }`}
                key={index}
                onClick={() => {
                  handleEntry(option)
                }}
                id={option}
              >
                {option}
              </div>
            )
          })}
        </div>
      )}

      {stepCountItem.action === 'read' && (
        <div className={`${classes.tnc}`}>{stepCountItem.tnc}</div>
      )}
    </div>
  )
}

export default RegistrationInputs
