import {
  BuildCancelIcon,
  BuildErrorIcon
} from 'components/Icons/EditorViewIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React, { Fragment, useState } from 'react'
import { sendMessage } from 'services/handle-ip'
import {
  selectBuildError,
  selectBuildFinished,
  selectCancelBuild,
  setCancelBuild,
  setOpenBuildPop
} from 'store/editor-slice'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { CommunicationIds } from 'utils/communication-ids'
import { assetUrl } from 'utils/constants'

import classes from '../ConfirmExit/ConfirmExit.module.scss'

const BuildShowroom = () => {
  const cancelBuild = useAppSelector(selectCancelBuild)
  const buildFinished = useAppSelector(selectBuildFinished)
  const buildError = useAppSelector(selectBuildError)
  const [miniBuild, setMiniBuild] = useState(false)
  const dispatch = useAppDispatch()
  return (
    <Fragment>
      {!miniBuild && !buildError && (
        <Fragment>
          {!buildFinished && (
            <div className={` ${classes.wrapper} cover-absolute to-center`}>
              <ModalPrimary
                hasClose
                onClose={() => {
                  setMiniBuild(true)
                }}
                className={`${classes.content}  v-to-center`}
              >
                {!cancelBuild && <h3>Building your showroom</h3>}
                {cancelBuild && <h3>Want to stop building showroom?</h3>}
                {!cancelBuild && (
                  <p>Preparing renders please wait. It might take some time.</p>
                )}
                {cancelBuild && (
                  <p>
                    Are you sure you want to stop building? This will not save
                    the your edits.
                  </p>
                )}
                <div
                  className={`${classes.barwrapper} ${classes['popup-barwrap']} to-center`}
                >
                  <div
                    className={`${classes.bar}`}
                    style={{ width: `${236 / 3}%` }}
                  ></div>
                </div>
                <div className={`${classes['confirm-btns']} to-center`}>
                  {!cancelBuild && (
                    <Fragment>
                      <Button
                        onClick={() => {
                          dispatch(setCancelBuild(true))
                        }}
                      >
                        CANCEL
                      </Button>
                      <Button
                        onClick={() => {
                          setMiniBuild(true)
                        }}
                      >
                        KEEP EDITING
                      </Button>
                    </Fragment>
                  )}
                  {cancelBuild && (
                    <Fragment>
                      <Button
                        onClick={() => {
                          dispatch(setCancelBuild(false))
                          dispatch(setOpenBuildPop(false))
                        }}
                      >
                        STOP
                      </Button>
                      <Button
                        onClick={() => {
                          dispatch(setCancelBuild(false))
                        }}
                      >
                        KEEP BUILDING
                      </Button>
                    </Fragment>
                  )}
                </div>
              </ModalPrimary>
            </div>
          )}
          {buildFinished && (
            <div className={` ${classes.wrapper} cover-absolute to-center`}>
              <ModalPrimary
                hasClose
                onClose={() => {
                  dispatch(setOpenBuildPop(false))
                }}
                className={`${classes.content}  v-to-center`}
              >
                <div className={classes.finishanim}>
                  <img src={`${assetUrl}/icons/checkwithstars.svg`} alt="" />
                </div>
                <p>
                  Your showroom has been built! <br /> Preview to see your
                  latest built
                </p>
              </ModalPrimary>
            </div>
          )}
        </Fragment>
      )}
      {miniBuild && (
        <div className={`${classes.minwrapper} v-to-center`}>
          <p>Building your showroom. Preparing renders please wait...</p>
          <div className={`${classes.loadcancel} to-center`}>
            <div className={`${classes.barwrapper} to-center`}>
              <div
                className={`${classes.bar}`}
                style={{ width: `${236 / 3}%` }}
              ></div>
            </div>
            <div
              onClick={() => {
                setMiniBuild(false)
                dispatch(setCancelBuild(true))
              }}
              style={{ cursor: 'pointer' }}
            >
              <BuildCancelIcon />
            </div>
          </div>
        </div>
      )}

      {buildError && (
        <div className={`${classes.builderror} to-center`}>
          <BuildErrorIcon />
          <div className={classes.errortext}>
            2 empty space found! place products to build your showroom
          </div>
          <div
            className={classes.navtext}
            onClick={() => {
              sendMessage({
                id: CommunicationIds.executetakemethere
              })
            }}
          >
            Take me here
          </div>
        </div>
      )}
    </Fragment>
  )
}

export default BuildShowroom
