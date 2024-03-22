import StepPagination from 'components/shared/StepPagination/StepPagination'
import React from 'react'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'store/hook'
import {
  selectRegisterState,
  setBlurredOnce,
  setEmailError,
  setMobileError,
  setStepCount
} from 'store/register-slice'
import { getMetadata } from 'utils/globals'

import classes from './Registration.module.scss'
import RegistrationInputs from './RegistrationInputs/RegistrationInputs'

import 'react-phone-number-input/style.css'

export const RegisterCard = () => {
  const { 'login-fields': loginFields } = getMetadata()

  const { stepCount, userRegData, mobileError, emailError } =
    useAppSelector(selectRegisterState)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const stepCountItem = loginFields[stepCount]
  const key = stepCountItem.id

  const checkEmpty = () => {
    return userRegData[key] === '' || userRegData[key] === undefined
  }

  const validate = (object: string) => {
    if (key === 'email') {
      if (object) {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (reg.test(userRegData.email) === false) {
          dispatch(setEmailError('Please provide valid email'))
        } else {
          dispatch(setEmailError(''))
        }
      } else {
        dispatch(setEmailError('Please enter email'))
      }
    } else if (key === 'mobile') {
      object
        ? isPossiblePhoneNumber(object)
          ? dispatch(setMobileError(''))
          : dispatch(setMobileError('Invalid number'))
        : dispatch(setMobileError('Please enter phone number'))
    } else if (key === 'name') {
      object
        ? dispatch(setEmailError(''))
        : dispatch(setEmailError('Please enter your name'))
    }
  }

  const checkNext = () => {
    switch (key) {
      case 'email':
        if (emailError || checkEmpty()) return false
        return true
        break

      case 'mobile':
        if (mobileError || checkEmpty()) return false
        return true
        break

      case 'name':
        if (checkEmpty()) return false
        return true
        break

      default:
        return true
    }
  }

  return (
    <div className={classes.cardwrapper}>
      <div className={classes.formwrapper}>
        <h1>Register</h1>

        <StepPagination
          steps={loginFields.length}
          currentStepIndex={stepCount}
          fill
        />

        <RegistrationInputs />

        <div className={classes.navbuttons}>
          <div
            className={`${classes.previous} ${stepCount > 0 ? '' : 'newhide'}`}
            onClick={() => {
              if (stepCount > 0) {
                dispatch(setStepCount(stepCount - 1))
              }
            }}
          >
            Previous
          </div>
          {stepCount < 6 && (
            <div className={classes.rightbtns}>
              <div className={classes.skip}>Skip</div>
              <div
                className={`${classes.next} ${
                  mobileError || emailError ? classes.disable : ''
                }`}
                onClick={() => {
                  if (checkNext()) {
                    dispatch(setStepCount((stepCount + 1) % 7))
                    dispatch(setBlurredOnce(false))
                  } else {
                    validate(userRegData[key])
                  }
                }}
              >
                Next
              </div>
            </div>
          )}
          {stepCount === 6 && (
            <div className={classes.rightbtns}>
              <div
                className={classes.next}
                onClick={() => {
                  navigate({
                    pathname: '/login'
                  })
                }}
              >
                Register
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Registration = () => {
  return (
    <div className={`${classes.wrapper} cover-absolute`}>
      <div className={classes.regcard}>
        <RegisterCard />
      </div>
    </div>
  )
}

export default Registration
