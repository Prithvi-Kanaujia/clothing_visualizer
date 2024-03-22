import { MusicNoteIcon, PencilIcon } from 'components/Icons/EditorViewIcons'
import { EditIcon } from 'components/Icons/GenericIcons'
import { PreviewIcon } from 'components/Icons/PanelIcons'
import {
  ArrowButton,
  Button,
  ButtonSecondary
} from 'components/shared/Buttons/Buttons'
import React, { Fragment } from 'react'
import {
  selectPreviewMode,
  selectTutIndex,
  setOpenExitPop,
  setOpenMusic,
  setOpenPublishPop,
  setPreviewMode
} from 'store/editor-slice'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { setEditorOn, setShowProfile } from 'store/profile-slice'
import { assetUrl } from 'utils/constants'

import OnBoardTut from '../OnBoardTut/OnBoardTut'

import PreviewBar from './PreviewBar'
import classes from './TopBar.module.scss'
import UserBar from './UserBar/UserBar'

export interface InTopProps {
  userMode?: boolean
}

const TopBar = ({ userMode = false }: InTopProps) => {
  const tutIndex = useAppSelector(selectTutIndex)
  const previewMode = useAppSelector(selectPreviewMode)
  const dispatch = useAppDispatch()

  return (
    <div className={`${classes.barswrapper} v-to-center`}>
      {!userMode && (
        <div className={`${classes.topbar} to-center`}>
          {/* <ButtonSecondary className={classes.backbtn}>Back</ButtonSecondary> */}
          <ArrowButton
            orientation="left"
            onClick={() => {
              dispatch(setOpenExitPop(true))
            }}
          >
            Back
          </ArrowButton>
          <div
            className={`${classes['submit-item']} ${
              tutIndex === 1 ? classes.highlight : ''
            } to-center`}
          >
            <div className={`${classes.imgwrap} to-center`}>
              <img
                src={`${assetUrl}/images/titansmall.png`}
                className={classes.logoimg}
                alt=""
              />
            </div>
            {"Karishma's Style Showroom"}
            <div
              style={{ cursor: 'pointer' }}
              onClick={() => {
                dispatch(setEditorOn(true))
                dispatch(setShowProfile(true))
              }}
            >
              {' '}
              <PencilIcon />
            </div>
            {tutIndex === 1 && <OnBoardTut />}
          </div>
          <div className={`${classes['submit-btns']} to-center`}>
            <div
              className={`${classes['submit-item']} ${
                tutIndex === 2 ? classes.highlight : ''
              }`}
            >
              <ButtonSecondary
                onClick={() => {
                  dispatch(setOpenMusic(true))
                }}
              >
                <MusicNoteIcon />
              </ButtonSecondary>
              {tutIndex === 2 && <OnBoardTut />}
            </div>
            <div
              className={`${classes['submit-item']} ${
                tutIndex === 3 ? classes.highlight : ''
              }`}
            >
              <ButtonSecondary
                onClick={() => {
                  dispatch(setPreviewMode(!previewMode))
                }}
              >
                {!previewMode && (
                  <Fragment>
                    {' '}
                    <PreviewIcon color={'var(--titan-accent-color)'} />{' '}
                    {'Preview'}{' '}
                  </Fragment>
                )}
                {previewMode && (
                  <Fragment>
                    {' '}
                    <EditIcon /> {'Edit'}{' '}
                  </Fragment>
                )}
              </ButtonSecondary>
              {tutIndex === 3 && <OnBoardTut />}
            </div>
            <div
              className={`${classes['submit-item']} ${
                tutIndex === 4 ? classes.highlight : ''
              }`}
            >
              <Button
                onClick={() => {
                  dispatch(setOpenPublishPop(true))
                }}
              >
                Publish
              </Button>
              {tutIndex === 4 && <OnBoardTut />}
            </div>
          </div>
        </div>
      )}
      {/* {previewMode && ( */}
      <Fragment>
        {previewMode && <PreviewBar />}
        {(previewMode || userMode) && <UserBar />}
      </Fragment>
      {/* // )} */}
    </div>
  )
}

export default TopBar
