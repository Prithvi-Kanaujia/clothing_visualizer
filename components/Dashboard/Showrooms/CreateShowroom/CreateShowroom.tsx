import LayoutItem from 'components/Dashboard/Showrooms/CreateShowroom/LayoutItem/LayoutItem'
import Preview from 'components/Dashboard/Showrooms/Preview/Preview'
import ShowroomInformation from 'components/Dashboard/Showrooms/ShowroomInformation/ShowroomInformation'
import {
  ArrowIcon,
  DropdownIcon,
  TickIcon
} from 'components/Icons/GenericIcons'
import {
  ArrowButton,
  Button,
  ButtonSecondary,
  LinkButton
} from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import StepPagination from 'components/shared/StepPagination/StepPagination'
import { TypographyPrimary } from 'components/shared/Typography/Typography'
import { useMetaverse } from 'hooks/useMetaverse'
import { useStart } from 'hooks/useStart'
import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from 'store/hook'
import { selectStarted } from 'store/main-loading-slice'
import {
  resetCreateData,
  selectCreateData,
  selectShowrooms,
  setCreateData,
  setShowrooms
} from 'store/showroom-slice'
import { assetUrl } from 'utils/constants'
import { getMetadata } from 'utils/globals'
import { v4 as uuidv4 } from 'uuid'

import classes from './CreateShowroom.module.scss'

export interface ICreateShowroomProps {
  onClose: () => void
}

const titles = ['Create new showroom', 'Showroom information']
const CreateShowroom = ({ onClose }: ICreateShowroomProps) => {
  const createData = useAppSelector(selectCreateData)
  const showrooms = useAppSelector(selectShowrooms)
  const started = useAppSelector(selectStarted)
  const {
    createStatus,
    overlayType,
    layoutIndex,
    currentStepIndex,
    description,
    name,
    brands: brandsState
  } = createData
  const { showroom } = getMetadata()
  const { brands, layouts } = showroom.create
  const layout = layouts[layoutIndex]
  const dispatch = useDispatch()

  const handeLayoutPrevNext = (val: number) => {
    if (val === 1 && layoutIndex === layouts.length - 1) return
    if (val === -1 && layoutIndex === 0) return
    dispatch(setCreateData({ layoutIndex: layoutIndex + val, presetIndex: 0 }))
  }

  if (started) {
    useStart()
    useMetaverse()
  }

  const handleChange = (
    key: string,
    value: string | boolean | number | object
  ) => {
    dispatch(setCreateData({ [key]: value }))
  }
  const handleCreate = () => {
    handleChange('createStatus', 'creating')
    setTimeout(() => {
      handleChange('createStatus', 'created')
      const showroom = {
        id: uuidv4(),
        name,
        description,
        image: 'images/dummy-image.jpg'
      }
      dispatch(setShowrooms([...showrooms, showroom]))
      setTimeout(() => {
        dispatch(resetCreateData())
        onClose?.()
      }, 0)
    }, 3000)
  }

  const isNextDisabled =
    Object.keys(brandsState).filter((key) => brandsState[key]).length === 0
  const isCreateDisabled = isNextDisabled || !name

  return (
    <div className={`${classes.wrapper} cover-fixed to-center`}>
      {createStatus === 'idle' && (
        <ModalPrimary
          className={`${classes.content} v-to-center`}
          hasClose
          onClose={onClose}
        >
          {overlayType !== 'create' && (
            <button
              className={`${classes.back} to-center`}
              onClick={() => {
                handleChange('overlayType', 'create')
              }}
            >
              <DropdownIcon /> Back
            </button>
          )}
          {overlayType === 'create' && (
            <div className={`${classes.top} v-to-center`}>
              <h2 className={classes.title}>{titles[currentStepIndex]}</h2>
              <StepPagination
                className={classes.pagination}
                steps={2}
                currentStepIndex={currentStepIndex}
              />
              {currentStepIndex === 0 && (
                <Fragment>
                  <div className={`${classes.container} v-to-center`}>
                    <TypographyPrimary
                      title="Brands selection"
                      subTitle="Select one or multiple brands for showroom creation"
                    />
                    <div className={`${classes.brands} to-center`}>
                      {brands.map((brand) => {
                        return (
                          <div
                            key={brand.id}
                            className={`${classes.brand} v-to-center`}
                          >
                            <img
                              className={classes.image}
                              src={`${assetUrl}/${brand.image}`}
                              alt={brand.name}
                            />
                            <div
                              className={`${classes.more} to-center`}
                              onClick={() => {
                                handleChange('brands', {
                                  ...brandsState,
                                  [brand.name]: !brandsState[brand.name]
                                })
                              }}
                            >
                              <span
                                className={`${classes.icon} ${
                                  brandsState[brand.name] ? classes.checked : ''
                                } to-center`}
                              >
                                <TickIcon />
                              </span>
                              <label
                                htmlFor={brand.id}
                                className={'v-to-center'}
                              >
                                <span className={classes.name}>
                                  {brand.name}
                                </span>
                                <span className={classes.info}>
                                  {brand.info}
                                </span>
                              </label>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                  <div className={`${classes.container} v-to-center`}>
                    <div className={`${classes['preset-heading']} to-center`}>
                      <TypographyPrimary
                        title="Preset selection"
                        subTitle="Select one theme for your showroom"
                      />
                      <LinkButton
                        onClick={() => handleChange('overlayType', 'preset')}
                      >
                        View all <DropdownIcon className="" />
                      </LinkButton>
                    </div>
                    <LayoutItem
                      item={layout}
                      currentLayoutIndex={layoutIndex}
                      onPresetIndexChange={(val) => {
                        handleChange('presetIndex', val)
                      }}
                      onPreviewClick={() => {
                        handleChange('overlayType', 'preview')
                      }}
                    />
                    <div className={`${classes.actions} to-center`}>
                      <ArrowButton
                        orientation="left"
                        onClick={() => handeLayoutPrevNext(-1)}
                      />
                      <span className={classes.page}>{`${layoutIndex + 1}/${
                        layouts.length
                      } Layouts`}</span>
                      <ArrowButton onClick={() => handeLayoutPrevNext(1)} />
                    </div>
                  </div>
                </Fragment>
              )}
              {currentStepIndex === 1 && (
                <ShowroomInformation
                  name={name}
                  description={description}
                  preview={layout.preview}
                  handleChange={handleChange}
                />
              )}
            </div>
          )}
          {overlayType === 'preset' && (
            <div
              className={`${classes.top} ${classes['presets-wrapper']} v-to-center`}
            >
              <h2 className={classes.title}>Preset selection</h2>
              <div className={`${classes['preset-title']} to-center`}>
                <TypographyPrimary
                  title="Select a layout"
                  subTitle="Select one theme for your showroom"
                />
                <div className={classes.count}>
                  {layouts.length} Showroom layouts
                </div>
              </div>

              <div
                className={`${classes['all-layouts']} scrollbar-primary v-to-center`}
              >
                {layouts.map((layoutItem, index) => {
                  return (
                    <LayoutItem
                      key={layoutItem.id}
                      item={layoutItem}
                      currentLayoutIndex={index}
                      className={classes['layouts-wrapper']}
                      onPresetIndexChange={(val) => {
                        handleChange('layoutIndex', index)
                        handleChange('presetIndex', val)
                      }}
                      onPreviewClick={() => {
                        handleChange('overlayType', 'preview')
                      }}
                    />
                  )
                })}
              </div>
            </div>
          )}
          {overlayType === 'preview' && (
            <Preview
              layout={layout}
              layoutIndex={layoutIndex}
              totalLayouts={layouts.length}
              handeLayoutPrevNext={handeLayoutPrevNext}
              handleChange={handleChange}
            />
          )}
          <div className={`${classes['submit-wrapper']} to-center`}>
            {currentStepIndex === 0 && (
              <Button
                className={classes.action}
                onClick={() => {
                  if (overlayType !== 'create') {
                    handleChange('overlayType', 'create')
                  }
                  handleChange('currentStepIndex', 1)
                }}
                disabled={isNextDisabled}
              >
                Next <ArrowIcon />
              </Button>
            )}
            {currentStepIndex === 1 && (
              <Fragment>
                <ButtonSecondary
                  className={classes.action}
                  onClick={() => handleChange('currentStepIndex', 0)}
                >
                  PREVIOUS
                </ButtonSecondary>
                <Button
                  className={classes.action}
                  disabled={isCreateDisabled}
                  onClick={handleCreate}
                >
                  CREATE
                </Button>
              </Fragment>
            )}
          </div>
        </ModalPrimary>
      )}
      {createStatus === 'creating' && (
        <ModalPrimary
          className={`${classes.content} ${classes['creating-wrapper']} v-to-center`}
        >
          <div
            className={`${classes['logo-wrapper']} ${classes.creating} to-center`}
          >
            <img
              className={classes.logo}
              src={`${assetUrl}/images/logo.png`}
              alt="logo"
            />
          </div>
          <p>Creating your showroom...</p>
        </ModalPrimary>
      )}
    </div>
  )
}

export default CreateShowroom
