import { DropUp } from 'components/Dashboard/Analytics/DropUp/DropUp'
import Profile from 'components/Dashboard/Profile/Profile'
import React from 'react'
import {
  selectOpenBuildPop,
  selectOpenExitPop,
  selectOpenMenu,
  selectOpenMusic,
  selectOpenProductPop,
  selectOpenPublishFinish,
  selectOpenPublishPop,
  selectTutIndex,
  setBuildError,
  setBuildFinished,
  setOpenBuildPop,
  setOpenMenu,
  setOpenProductPop,
  setOpenPublishFinish
} from 'store/editor-slice'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectEditorOn, selectShowProfile } from 'store/profile-slice'

import BuildShowroom from './BuildShowroom/BuildShowroom'
import ConfirmExit from './ConfirmExit/ConfirmExit'
import FilterPanel from './LeftProductPanel/FilterPanel'
import LeftProductPanel from './LeftProductPanel/LeftProductPanel'
import MusicSelect from './MusicSelect/MusicSelect'
import ProductOverview from './ProductOverview/ProductOverview'
import PublishConfirm from './PublishShowroom/PublishConfirm'
import PublishShowroom from './PublishShowroom/PublishShowroom'
import PreviewBar from './TopBar/PreviewBar'
import TopBar from './TopBar/TopBar'
import classes from './ViewShowroom.module.scss'

const ViewShowroom = () => {
  const tutIndex = useAppSelector(selectTutIndex)
  const openMenu = useAppSelector(selectOpenMenu)
  const showProfile = useAppSelector(selectShowProfile)
  const editorOn = useAppSelector(selectEditorOn)
  const openBuildPop = useAppSelector(selectOpenBuildPop)
  const openPublishPop = useAppSelector(selectOpenPublishPop)
  const openExitPop = useAppSelector(selectOpenExitPop)
  const openMusic = useAppSelector(selectOpenMusic)
  const OpenProductPop = useAppSelector(selectOpenProductPop)
  const OpenPublishFinish = useAppSelector(selectOpenPublishFinish)
  const dispatch = useAppDispatch()
  return (
    <div className={`${classes.wrapper}`}>
      {tutIndex < 5 && (
        <div className={`${classes.pageblack} cover-absolute`}></div>
      )}
      <TopBar />
      <div className={classes['showroom-nav']}>
        <DropUp showUp={true} editor={true} />
      </div>
      <LeftProductPanel />
      <FilterPanel />
      {/* <div
        className={`${classes.openmenu}`}
        onClick={() => {
          dispatch(setOpenMenu(!openMenu))
        }}
      >
        Open Menu
      </div>
      <div
        className={`${classes.buildpop}`}
        onClick={() => {
          dispatch(setOpenBuildPop(true))
        }}
      >
        Build Showroom
      </div>
      <div
        className={`${classes.buildfinish}`}
        onClick={() => {
          dispatch(setOpenBuildPop(true))
          dispatch(setBuildFinished(true))
        }}
      >
        Build Finished
      </div>
      <div
        className={`${classes.productpop}`}
        onClick={() => {
          dispatch(setOpenProductPop(true))
        }}
      >
        Open Product
      </div>
      <div
        className={`${classes.builderror}`}
        onClick={() => {
          dispatch(setOpenBuildPop(true))
          dispatch(setBuildError(true))
        }}
      >
        Build with error
      </div>
      <div
        className={`${classes.publishfinish}`}
        onClick={() => {
          dispatch(setOpenPublishFinish(true))
        }}
      >
        Publish Finish
      </div> */}
      {showProfile && <Profile editor={editorOn} />}
      {openExitPop && <ConfirmExit />}
      {openMusic && <MusicSelect />}
      {openBuildPop && <BuildShowroom />}
      {openPublishPop && <PublishShowroom />}
      {OpenProductPop && <ProductOverview />}
      {OpenPublishFinish && <PublishConfirm />}
    </div>
  )
}

export default ViewShowroom
