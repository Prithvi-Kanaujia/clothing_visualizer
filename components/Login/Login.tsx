import { TickIcon } from 'components/Icons/GenericIcons'
import { CardSet } from 'components/Login/LoginCard/LoginCard'
import { Button } from 'components/shared/Buttons/Buttons'
import HeadingSub from 'components/shared/HeadingSub/HeadingSub'
import { InputPrimary } from 'components/shared/Inputs/Inputs'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assetUrl } from 'utils/constants'

import classes from './Login.module.scss'

const RightForm = () => {
  const [remCheck, setRemCheck] = useState(false)
  return (
    <div className={`${classes.rightwrapper} v-to-center`}>
      <div className={classes.formlogo}>
        <img src={`${assetUrl}/images/logo.png`} />
      </div>
      <div className={`${classes.inputgroup} v-to-center`}>
        <div className={`${classes.inputwrapper}`}>
          {/* <label htmlFor="email">Email</label>
          <input type="text" placeholder="Username" id="username" /> */}
          <InputPrimary
            label="Username"
            type="text"
            placeholder="Username"
            id="username"
          />
        </div>
        <div className={`${classes.inputwrapper}`}>
          {/* <label htmlFor="email">Password</label>
          <input type="password" placeholder="Password" id="email" /> */}
          <InputPrimary
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <div className={`${classes.remember} to-center`}>
          <div className={`${classes.checkbox} to-center`}>
            <div
              className={`${classes.box} ${
                remCheck ? classes.checked : ''
              } to-center`}
              onClick={() => {
                setRemCheck((prev) => !prev)
              }}
            >
              <TickIcon />
            </div>
            <div>Remember for 30 days</div>
          </div>
          <div>Forgot Password?</div>
        </div>
        <div className={classes['submit-btn']}></div>
        <Button className={classes['submit-btn']}>Login</Button>
      </div>
      <div className={`${classes.lowerlink} to-center`}>
        <p>{'Don’t have an account?'}</p>
        <p className={classes.reglink}>Register for free</p>
      </div>
    </div>
  )
}

const Login = () => {
  const navigate = useNavigate()

  return (
    <div className={`${classes.logwrapper} cover-absolute`}>
      <div className={classes.left}>
        <div className={classes.leftcontent}>
          <div className={classes.title}>
            <h2>Unlock your</h2>
            <h1>Virtual Store</h1>
          </div>
          <div className={classes.subtitle}>
            <HeadingSub
              heading={'Grow your Business'}
              subheading={'ce3vcjb3vco'}
            />
          </div>
          <div className={classes.subtitle}>
            <HeadingSub
              heading={'Business'}
              subheading={'ce3vcjb3vcowbdeckjve'}
            />
          </div>
          <div
            className={`${classes['register-btn']} to-center`}
            onClick={() => [
              navigate({
                pathname: '/register'
              })
            ]}
          >
            Register
          </div>
          <div className={classes.instcard}>
            <CardSet />
          </div>
        </div>
      </div>
      <div className={`${classes.rightform} to-center`}>
        <RightForm />
      </div>
    </div>
  )
}

export default Login
