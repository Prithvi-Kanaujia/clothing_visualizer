import Analytics from 'components/Dashboard/Analytics/Analytics'
import Help from 'components/Dashboard/Help/Help'
import Navbar from 'components/Dashboard/Navbar/Navbar'
import Panel from 'components/Dashboard/Panel/Panel'
import Profile from 'components/Dashboard/Profile/Profile'
import Share from 'components/Dashboard/Share/Share'
import DeleteConfirmation from 'components/Dashboard/Showrooms/DeleteConfirmation/DeleteConfirmation'
import EditShowroom from 'components/Dashboard/Showrooms/EditShowroom/EditShowroom'
import Showrooms from 'components/Dashboard/Showrooms/Showrooms'
import React from 'react'
import { useAppSelector } from 'store/hook'
import { selectActiveTab } from 'store/panel-slice'
import { selectEditorOn, selectShowProfile } from 'store/profile-slice'
import {
  selectDeleteShowroomId,
  selectEditShowroomId,
  selectShowShare
} from 'store/showroom-slice'

import classes from './Dashboard.module.scss'

const Dashboard = () => {
  const activeTab = useAppSelector(selectActiveTab)
  const deleteShowroomId = useAppSelector(selectDeleteShowroomId)
  const showShare = useAppSelector(selectShowShare)
  const editShowroomId = useAppSelector(selectEditShowroomId)
  const showProfile = useAppSelector(selectShowProfile)
  const editorOn = useAppSelector(selectEditorOn)
  return (
    <div className={`${classes.wrapper} v-to-center`}>
      <Navbar />
      <div className={`${classes.content} to-center`}>
        <Panel />
        {activeTab === 0 && <Showrooms />}
        {activeTab === 1 && <Analytics />}
        {activeTab === 3 && <Help />}
      </div>
      {deleteShowroomId !== '' && <DeleteConfirmation />}
      {showShare && <Share />}
      {editShowroomId && <EditShowroom id={editShowroomId} />}
      {showProfile && <Profile editor={editorOn} />}
    </div>
  )
}

export default Dashboard
