import { Typography } from '@mui/material'
import { LeftArrowIcon } from 'components/Icons/EditorViewIcons'
import MobileViewKnob from 'components/shared/MobileViewKnob/MobileViewKnob'
import Popover from 'components/shared/Popover/Popover'
import React from 'react'
import { Link } from 'react-router-dom'

import IconSection from '../IconSection/IconSection'

import classes from './ViewDetailsmobile.module.scss'

type ProducrDetailsMobileProp = {
  setIsProductViewOpen: (value: boolean) => void
  setproductDetails: (value: boolean) => void
  isOpen: boolean
}

export const ViewDetailsmobile = ({
  isOpen,
  setIsProductViewOpen,
  setproductDetails
}: ProducrDetailsMobileProp) => {
  return (
    <Popover
      contentClassName="view-details-mobile"
      isOpen={isOpen}
      onClose={() => {
        setproductDetails(false)
        setIsProductViewOpen(true)
      }}
    >
      <div className={classes['slide-knob-parent-view-details']}>
        <MobileViewKnob />
      </div>
      <div
        onClick={() => {
          setproductDetails(false)
          setIsProductViewOpen(true)
        }}
        className={classes['arrow-text-mobile']}
      >
        <LeftArrowIcon />
        <Typography style={{ fontSize: '14px', color: 'white' }}>
          Product Overview
        </Typography>
      </div>
      <div>
        <div className={classes['details-header-mobile']}>
          <Typography style={{ fontSize: '14px', color: 'white' }}>
            Product Specifications
          </Typography>
        </div>
        <div className={classes['table-div-mobile']}>
          <table>
            <tr>
              <td className={classes['table-right-border-mobile']}>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Product Category
                </Typography>
              </td>
              <td>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Saree
                </Typography>
              </td>
            </tr>
            <tr>
              <td className={classes['table-right-border-mobile']}>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Fabric
                </Typography>
              </td>
              <td>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Tusar
                </Typography>
              </td>
            </tr>
            <tr>
              <td className={classes['table-right-border-mobile']}>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Origin
                </Typography>
              </td>
              <td>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Lucknow
                </Typography>
              </td>
            </tr>
            <tr>
              <td className={classes['table-right-border-mobile']}>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Occasion
                </Typography>
              </td>
              <td>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Festive Wear
                </Typography>
              </td>
            </tr>
            <tr>
              <td className={classes['table-right-border-mobile']}>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Craft
                </Typography>
              </td>
              <td>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Craft
                </Typography>
              </td>
            </tr>
            <tr>
              <td className={classes['table-right-border-mobile']}>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Occasion
                </Typography>
              </td>
              <td>
                <Typography style={{ fontSize: '12px', color: 'white' }}>
                  Festive Wear
                </Typography>
              </td>
            </tr>
          </table>
        </div>
        <div className={classes['bottom-tab-mobile']}>
          <IconSection />
          <IconSection />
          <IconSection />
          <IconSection />
          <IconSection />
        </div>
        <div className={classes['links-mobile']}>
          <Link to="" style={{ fontSize: '12px', color: 'white' }}>
            Delivery
          </Link>
          <Link to="" style={{ fontSize: '12px', color: 'white' }}>
            Delivery
          </Link>
          <Link to="" style={{ fontSize: '12px', color: 'white' }}>
            Delivery
          </Link>
          <Link to="" style={{ fontSize: '12px', color: 'white' }}>
            Delivery
          </Link>
          <Link to="" style={{ fontSize: '12px', color: 'white' }}>
            Delivery
          </Link>
        </div>
      </div>
    </Popover>
  )
}

export default ViewDetailsmobile
