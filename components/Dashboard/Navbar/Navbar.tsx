import { DropdownIcon, SearchIcon } from 'components/Icons/GenericIcons'
import React from 'react'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { setShowProfile } from 'store/profile-slice'
import { selectSearchString, setSearchString } from 'store/showroom-slice'
import { assetUrl } from 'utils/constants'

import classes from './Navbar.module.scss'
const Navbar = () => {
  const searchString = useAppSelector(selectSearchString)
  const dispatch = useAppDispatch()

  const handleHome = () => {
    window.open('https://www.titancompany.in/', '_blank')
  }
  const handleChange = (value: string) => {
    dispatch(setSearchString(value))
  }
  const handleProfile = () => {
    dispatch(setShowProfile(true))
  }

  return (
    <div className={`${classes.wrapper} to-center`}>
      <div className={classes.logo} onClick={handleHome}>
        <img src={`${assetUrl}/images/logo.png`} alt="logo" draggable="false" />
      </div>
      <div className={`${classes.search} to-center`}>
        <label htmlFor="search-bar" className="to-center">
          <SearchIcon className={classes.icon} />
        </label>
        <input
          id="search-bar"
          value={searchString}
          type="text"
          placeholder="Search showrooms"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
      <div className={`${classes.profile} to-center`} onClick={handleProfile}>
        <div className={`${classes.short} to-center`}>K</div>
        <div className={`${classes.full} v-to-center`}>
          <span>Karishma’s</span>
          <span> Style Showroom</span>
        </div>
        <DropdownIcon />
      </div>
    </div>
  )
}

export default Navbar
