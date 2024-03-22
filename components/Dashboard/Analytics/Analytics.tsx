import DatePicker, {
  Calendar
} from '@amir04lm26/react-modern-calendar-date-picker'
import { CalendarIcon } from 'components/Icons/GenericIcons'
import { Button, ButtonSecondary } from 'components/shared/Buttons/Buttons'
import React, { Fragment, useState } from 'react'
import 'react-modern-calendar-datepicker/lib/DatePicker.css'

import classes from './Analytics.module.scss'
import { DropUp } from './DropUp/DropUp'
import PurchaseHistory from './PurchaseHistory/PurchaseHistory'

const Analytics = () => {
  const [overview, setOverview] = useState(true)
  const [history, setHistory] = useState(false)
  const [summary, setSummary] = useState(false)
  const [timeSelected, setTimeSelected] = useState('')
  const [selectedDayRange, setSelectedDayRange] = useState({
    from: null,
    to: null
  })

  const renderCustomInput = ({ ref }: any) => (
    <div className={classes.inputwrap}>
      <CalendarIcon className={classes.calicon} />
      <input
        readOnly
        ref={ref} // necessary
        placeholder="Custom"
        value={''}
        className={`${classes.calendarcustom} ${
          timeSelected === 'custom' ? classes['time-active'] : ''
        }`}
        onClick={() => {
          setTimeSelected('custom')
        }}
      />
    </div>
  )

  return (
    <div className={`${classes.wrapper} v-to-center`}>
      <h2>Analytics</h2>
      <div className={`${classes.toggles} to-center`}>
        <div className={`${classes.topbtns} to-center`}>
          <div className={`${classes.localtoggle} to-center`}>
            <Button
              className={`${overview ? '' : classes['not-selected']} ${
                classes.left
              }`}
              onClick={() => setOverview(true)}
            >
              Store Overview
            </Button>
            <Button
              className={`${!overview ? '' : classes['not-selected']} ${
                classes.right
              }`}
              onClick={() => setOverview(false)}
            >
              Product Expert
            </Button>
          </div>
          <div className={classes.dropdownwrap}>
            {/* <ButtonSecondary>Dropdown</ButtonSecondary> */}
            <DropUp showUp={false} editor={false} />
          </div>
        </div>
        <div className={`${classes.timefilter} to-center`}>
          <ButtonSecondary
            className={`${
              timeSelected === 'all' ? classes['time-active'] : ''
            }`}
            onClick={() => {
              setTimeSelected('all')
            }}
          >
            All-time
          </ButtonSecondary>
          <ButtonSecondary
            className={`${timeSelected === '7D' ? classes['time-active'] : ''}`}
            onClick={() => {
              setTimeSelected('7D')
            }}
          >
            7D
          </ButtonSecondary>
          <ButtonSecondary
            className={`${
              timeSelected === '30D' ? classes['time-active'] : ''
            }`}
            onClick={() => {
              setTimeSelected('30D')
            }}
          >
            30D
          </ButtonSecondary>
          <ButtonSecondary
            className={`${timeSelected === '6M' ? classes['time-active'] : ''}`}
            onClick={() => {
              setTimeSelected('6M')
            }}
          >
            6M
          </ButtonSecondary>
          <ButtonSecondary
            className={`${
              timeSelected === '12M' ? classes['time-active'] : ''
            }`}
            onClick={() => {
              setTimeSelected('12M')
            }}
          >
            12M
          </ButtonSecondary>
          <div className={classes.calendarwrap}>
            <DatePicker
              value={selectedDayRange}
              onChange={setSelectedDayRange}
              inputPlaceholder="Custom"
              renderInput={renderCustomInput}
              colorPrimary="var(--titan-accent-color)"
              colorPrimaryLight="var(--titan-accent-color-tint)"
            />
          </div>
        </div>
      </div>
      {overview && (
        <Fragment>
          <div className={`${classes.infocards}`}>
            <div
              className={`${classes.cardwrapper} v-to-center ${classes.item1}`}
            >
              <div className={classes.cardhead}>
                <h3>Total Earnings</h3>
                <p>Earnings of all-time</p>
              </div>
              <div className={`${classes.content} v-to-center `}>
                <h2>&#8377; 5670</h2>
                <p>In revenue</p>
              </div>
            </div>

            <div
              className={`${classes.cardwrapper} v-to-center ${classes.item2}`}
            >
              <div className={classes.cardhead}>
                <h3>Heading</h3>
                <p>Number of items purchased of all-time</p>
              </div>
              <div className={`${classes.content} v-to-center`}>
                <h2>850</h2>
                <p>Total Purchases</p>
              </div>
            </div>
          </div>
          <div className={`${classes.infocards} ${classes.unequal}`}>
            <div
              className={`${classes.cardwrapper} v-to-center ${classes.item3}`}
            >
              <div className={classes.cardhead}>
                <h3>Top Selling Products</h3>
                <p>Earnings of all-time</p>
              </div>
              <div className={`${classes.content} v-to-center`}>
                <table>
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Brand</th>
                      <th>No. of items</th>
                    </tr>
                  </thead>
                  <tr>
                    <td>Silver ring with gold..</td>
                    <td>Mia</td>
                    <td>
                      <div className={`${classes.barwrapper} to-center`}>
                        <div
                          className={`${classes.bar}`}
                          style={{ width: `${236 / 3}%` }}
                        ></div>
                        <div>236</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Silver ring with gold..</td>
                    <td>Taneira</td>
                    <td>
                      <div className={`${classes.barwrapper} to-center`}>
                        <div
                          className={`${classes.bar}`}
                          style={{ width: `${134 / 3}%` }}
                        ></div>
                        <div>134</div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div
              className={`${classes.cardwrapper} v-to-center ${classes.item4}`}
            >
              <div className={classes.cardhead}>
                <h3>Number of customers</h3>
                <p>Earnings of all-time</p>
              </div>
              <div className={`${classes.content} v-to-center`}>
                <h2>126</h2>
                <p>Users</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
      {!overview && (
        <div className={`${classes['expert-table']}`}>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Customer</th>
                <th>Number</th>
                <th>Intent Mapping</th>
                <th>Purchase History</th>
                <th>Conversation summary</th>
              </tr>
            </thead>
            <tr>
              <td>1</td>
              <td>Customer name customeer</td>
              <td>Number</td>
              <td>Online Purchase</td>
              <td
                className={classes.pops}
                onClick={() => {
                  setHistory(true)
                }}
              >
                Invoice
              </td>
              <td
                className={classes.pops}
                onClick={() => {
                  setSummary(true)
                }}
              >
                View
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Customer name</td>
              <td>Number</td>
              <td>Online Purchase</td>
              <td
                className={classes.pops}
                onClick={() => {
                  setHistory(true)
                }}
              >
                Invoice
              </td>
              <td
                className={classes.pops}
                onClick={() => {
                  setSummary(true)
                }}
              >
                View
              </td>
            </tr>
          </table>
        </div>
      )}
      {(history || summary) && (
        <PurchaseHistory
          headIndex={history ? 0 : 1}
          onClose={() => {
            setHistory(false)
            setSummary(false)
          }}
        />
      )}
    </div>
  )
}

export default Analytics
