/* jscpd:ignore-start */

import { CrossIcon } from 'components/Icons/GenericIcons'
import React, { Fragment } from 'react'
import { assetUrl } from 'utils/constants'

import classes from './PurchaseHistory.module.scss'

export interface IPurchaseHistoryProps {
  headIndex: number
  onClose: () => void
}

const PurchaseHistory = ({ headIndex, onClose }: IPurchaseHistoryProps) => {
  const titles = ['Purchase history', 'Conversation information']
  return (
    <div className={`${classes.wrapper} cover-absolute to-center`}>
      <div className={`${classes.content} v-to-center`}>
        <button className={`${classes.close} to-center`} onClick={onClose}>
          <CrossIcon />
        </button>
        <div className={`${classes.top} v-to-center`}>
          <h2 className={classes.title}>{titles[headIndex]}</h2>
        </div>
        <div className={`${classes.internal} v-to-center`}>
          <div className={`${classes.customer} to-center`}>
            <div>{`${
              headIndex === 0 ? 'Shipped to:' : 'Conversation with:'
            } Juhi Mahajan`}</div>
            <div>{`6 ${headIndex === 0 ? 'products' : 'Conversations'}`}</div>
          </div>
          <div className={`${classes.orderlist} v-to-center`}>
            <div className={`${classes.cardwrapper} v-to-center`}>
              <div className={`${classes.head} to-center`}>
                <div className={`${classes.heading}`}>
                  {`${headIndex === 0 ? 'Order Placed: ' : ''}`}
                  <span>10th April</span>
                </div>
                <div className={`${classes.heading}`}>
                  {headIndex === 0 ? `${3} products` : ''}{' '}
                </div>
              </div>
              {headIndex === 0 && (
                <Fragment>
                  <div className={`${classes.productlist}`}>
                    <div className={`${classes.product} to-center`}>
                      <div className={`${classes.prodimg}`}>
                        <img src={`${assetUrl}/images/Mask group.png`} alt="" />
                      </div>
                      <div className={`${classes.prodinfo}`}>
                        <div>
                          14kt Yellow Gold Chalcedony Earrings With Open Hexagon
                          Design
                        </div>
                        <div>
                          Total: <span>23,450</span>
                        </div>
                        <div>
                          Size: <span>OneSize</span>
                        </div>
                        <div>
                          Quantity: <span>2</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${classes.product} to-center`}>
                      <div className={`${classes.prodimg}`}>
                        <img src={`${assetUrl}/images/Mask group.png`} alt="" />
                      </div>
                      <div className={`${classes.prodinfo}`}>
                        <div>
                          14kt Yellow Gold Chalcedony Earrings With Open Hexagon
                          Design
                        </div>
                        <div>
                          Total: <span>23,450</span>
                        </div>
                        <div>
                          Size: <span>OneSize</span>
                        </div>
                        <div>
                          Quantity: <span>2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              {headIndex === 1 && (
                <div className={`${classes.product} to-center`}>
                  <div style={{ padding: '20px' }}>
                    Customer was looking to buy gold ring for her niece for her
                    birth. Customer specifically wanted a princess cut ring with
                    personalised touch such as engraving her name with her
                    favourite colour diamond. Customer was looking to buy gold
                    ring for her niece for her birth. Customer specifically
                    wanted a princess cut ring with personalised touch such as
                    engraving her name with her favourite colour diamond.
                  </div>
                </div>
              )}
            </div>
            <div className={`${classes.cardwrapper} v-to-center`}>
              <div className={`${classes.head} to-center`}>
                <div className={`${classes.heading}`}>
                  {`${headIndex === 0 ? 'Order Placed: ' : ''}`}
                  <span>10th April</span>
                </div>
                <div className={`${classes.heading}`}>
                  {headIndex === 0 ? `${3} products` : ''}{' '}
                </div>
              </div>
              {headIndex === 0 && (
                <Fragment>
                  <div className={`${classes.productlist}`}>
                    <div className={`${classes.product} to-center`}>
                      <div className={`${classes.prodimg}`}>
                        <img src={`${assetUrl}/images/Mask group.png`} alt="" />
                      </div>
                      <div className={`${classes.prodinfo}`}>
                        <div>
                          14kt Yellow Gold Chalcedony Earrings With Open Hexagon
                          Design
                        </div>
                        <div>
                          Total: <span>23,450</span>
                        </div>
                        <div>
                          Size: <span>OneSize</span>
                        </div>
                        <div>
                          Quantity: <span>2</span>
                        </div>
                      </div>
                    </div>
                    <div className={`${classes.product} to-center`}>
                      <div className={`${classes.prodimg}`}>
                        <img src={`${assetUrl}/images/Mask group.png`} alt="" />
                      </div>
                      <div className={`${classes.prodinfo}`}>
                        <div>
                          14kt Yellow Gold Chalcedony Earrings With Open Hexagon
                          Design
                        </div>
                        <div>
                          Total: <span>23,450</span>
                        </div>
                        <div>
                          Size: <span>OneSize</span>
                        </div>
                        <div>
                          Quantity: <span>2</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
              {headIndex === 1 && (
                <div className={`${classes.product} to-center`}>
                  <div style={{ padding: '20px' }}>
                    Customer was looking to buy gold ring for her niece for her
                    birth. Customer specifically wanted a princess cut ring with
                    personalised touch such as engraving her name with her
                    favourite colour diamond. Customer was looking to buy gold
                    ring for her niece for her birth. Customer specifically
                    wanted a princess cut ring with personalised touch such as
                    engraving her name with her favourite colour diamond.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PurchaseHistory

/* jscpd:ignore-end */
