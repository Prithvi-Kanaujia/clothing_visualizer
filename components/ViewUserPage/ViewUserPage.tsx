import { DropUp } from 'components/Dashboard/Analytics/DropUp/DropUp'
import {
  HeartFavIcon,
  VirtualAssistantIcon
} from 'components/Icons/EditorViewIcons'
import { Button, ButtonSecondary } from 'components/shared/Buttons/Buttons'
import React, { Fragment } from 'react'
import { isMobile } from 'react-device-detect'
import { useAppDispatch, useAppSelector } from 'store/hook'
import {
  selectShowVisualizer,
  selectTutorialIndex,
  setShowVisualizer
} from 'store/user-slice'

// import MobileBottom from './MobileBottom/MobileBottom'
import TopNav from './TopNav/TopNav'
import Tutorial from './Tutorial/Tutorial'
import classes from './ViewUserPage.module.scss'
import SareeVisualizer from './Visualizer/SareeVisualizer'

const ViewUserPage = () => {
  const tutorialIndex = useAppSelector(selectTutorialIndex)
  const showVisualizer = useAppSelector(selectShowVisualizer)
  const dispatch = useAppDispatch()

  return (
    <Fragment>
      <div className={classes.wrapper}>
        {tutorialIndex < 2 && (
          <div className={`${classes.overlay} cover-absolute`} />
        )}
        <TopNav />
        <Tutorial />
        {!showVisualizer && (
          <>
            <div
              className={`${tutorialIndex === 0
                ? `${classes?.['product-active']}  to-center`
                : classes.product
                }`}
            >
              <div className={classes?.['product-expert']}>
                <div className={`${classes.icon} to-center`}>
                  <VirtualAssistantIcon />
                </div>
                <div className={classes.text}>
                  <h3>Product expert</h3>
                  <p>Click to connect</p>
                </div>
              </div>
            </div>
            <Button
              onClick={() => {
                dispatch(setShowVisualizer(true))
              }}
            >
              Temp button to toggle Visualizer
            </Button>
            <div className={classes?.['select-showroom']}>
              <DropUp
                initialState="Entrance"
                products={[
                  'Entrance',
                  'Jewellery wall 2',
                  'Jewellery wall',
                  'Wall 2',
                  'Wall 1',
                  'Wall 1',
                  'Wall 1',
                  'Wall 1'
                ]}
                showUp={true}
                editor={true}
              />
            </div>
          </>
        )}
        {showVisualizer && (
          <SareeVisualizer
            onExit={() => {
              dispatch(setShowVisualizer(false))
            }}
          />
        )}
        {showVisualizer && !isMobile && (
          <div className={classes?.['visualizer-btns']}>
            <ButtonSecondary>
              <HeartFavIcon />
              <p className={classes.text}>ADD TO FAVORITES</p>
            </ButtonSecondary>
            <Button>ADD TO CART</Button>
          </div>
        )}
        {/* <MobileBottom /> */}
      </div>
    </Fragment>
  )
}

export default ViewUserPage
