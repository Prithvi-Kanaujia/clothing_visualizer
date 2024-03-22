/* jscpd:ignore-start */

import { FilterIcon } from 'components/Icons/EditorViewIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import React, { useState } from 'react'
import { sendMessage } from 'services/handle-ip'
import {
  selectMenyType,
  selectOpenFilter,
  selectOpenMenu,
  selectSelectedAssetSku,
  selectSelectedHotspotID,
  selectSelectedHotspotPlaced,
  selectSelectedHotspotType,
  setMenuType,
  setOpenFilter,
  setOpenMenu
} from 'store/editor-slice'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { CommunicationIds } from 'utils/communication-ids'
import { getMetadata } from 'utils/globals'

import { CollapseMenu } from './FilterPanel'
import classes from './LeftProductPanel.module.scss'

const mannequins = {
  heading: '4 Mannequins',
  list: [{ name: '1st' }, { name: '2nd' }, { name: '3rd' }, { name: '4th' }]
}

const LeftProductPanel = () => {
  const [isFavourite, setIsFavourite] = useState(false)
  // const openFilter = useAppSelector(selectOpenFilter)
  const menuType = useAppSelector(selectMenyType)
  const openMenu = useAppSelector(selectOpenMenu)
  const selectedHotspotID = useAppSelector(selectSelectedHotspotID)
  const selectedHotspotType = useAppSelector(selectSelectedHotspotType)
  const selectedAssetSku = useAppSelector(selectSelectedAssetSku)
  const selectedHotspotPlaced = useAppSelector(selectSelectedHotspotPlaced)

  const { assetlist } = getMetadata()
  const filterAssetList = assetlist.filter((asset) => {
    return asset.type === selectedHotspotType
  })

  const dispatch = useAppDispatch()
  return (
    <div
      className={`${classes['panel-wrap']} ${
        openMenu ? classes.openmenu : ''
      } v-to-center`}
    >
      <h2>Texture Selection</h2>
      <div className={`${classes.subcat} to-center`}>
        <div className={`${classes.switchfav} to-center`}>
          <p
            onClick={() => {
              setIsFavourite(false)
              dispatch(setMenuType('textures'))
            }}
          >
            Textures
          </p>
          <p
            onClick={() => {
              dispatch(setMenuType('mannequins'))
            }}
          >
            Mannequin
          </p>
          <p
            onClick={() => {
              setIsFavourite(true)
              dispatch(setMenuType('favorites'))
            }}
          >
            Favorites
          </p>
        </div>
        <div
          onClick={() => {
            dispatch(setOpenMenu(false))
            dispatch(setMenuType(''))
            dispatch(setOpenFilter(true))
          }}
        >
          <FilterIcon />
        </div>
      </div>
      {menuType === 'textures' && (
        <div className={`${classes.prodlist}`}>
          {filterAssetList.map((asset) => {
            return (
              <div
                className={`${classes.prodwrap} v-to-center`}
                key={asset.name}
              >
                <div className={classes.imgwrap}></div>
                <div>{asset.name}</div>
                {selectedAssetSku !== asset.sku && (
                  <Button
                    className={classes['down-btn']}
                    onClick={() => {
                      if (selectedHotspotPlaced === 'true') {
                        sendMessage({
                          id: CommunicationIds.executereplaceasset,
                          args: [selectedHotspotID, asset.sku, asset.ProjectID]
                        })
                      } else {
                        sendMessage({
                          id: CommunicationIds.executeaddasset,
                          args: [selectedHotspotID, asset.sku, asset.ProjectID]
                        })
                      }
                    }}
                  >
                    DOWNLOAD
                  </Button>
                )}
                {selectedAssetSku === asset.sku && (
                  <Button
                    className={classes['down-btn']}
                    onClick={() => {
                      sendMessage({
                        id: CommunicationIds.executeremoveasset,
                        args: [selectedHotspotID, asset.sku, asset.ProjectID]
                      })
                    }}
                  >
                    - REMOVE
                  </Button>
                )}
              </div>
            )
          })}
          {/* <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button
              className={classes['down-btn']}
              onClick={() => {
                sendMessage({
                  id: CommunicationIds.executeaddasset,
                  args: [selectedHotspotID, '2514', '18']
                })
              }}
            >
              DOWNLOAD
            </Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div>
          <div className={`${classes.prodwrap} v-to-center`}>
            <div className={classes.imgwrap}></div>
            <div>Wall paint 1</div>
            <Button className={classes['down-btn']}>DOWNLOAD</Button>
          </div> */}
        </div>
      )}

      {menuType === 'mannequins' && <CollapseMenu item={mannequins} />}
    </div>
  )
}

export default LeftProductPanel

/* jscpd:ignore-end */
