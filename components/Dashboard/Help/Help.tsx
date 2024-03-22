/* jscpd:ignore-start */

import { PauseIcon, PlayIcon } from 'components/Icons/GenericIcons'
import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectActiveQuestion,
  selectActiveSection,
  setActiveQuestion,
  setActiveSection
} from 'store/help-slice'
import { getMetadata } from 'utils/globals'

import classes from './Help.module.scss'

// const FAQs = [
//   {
//     id: 0,
//     title: 'Creating & managing showroom',
//     questions: [
//       {
//         id: 0,
//         question: 'How to create a showroom?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
//       },
//       {
//         id: 1,
//         question: 'How to add, replace and delete products from the showroom?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       },
//       {
//         id: 2,
//         question: 'How to publish your first showroom and share it across?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       }
//     ]
//   },
//   {
//     id: 1,
//     title: 'Commissions and reimbursements',
//     questions: [
//       {
//         id: 0,
//         question: 'How to create a showroom?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       },
//       {
//         id: 1,
//         question: 'How to add, replace and delete products from the showroom?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       },
//       {
//         id: 2,
//         question: 'How to publish your first showroom and share it across?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       }
//     ]
//   },
//   {
//     id: 2,
//     title: 'Know your dashboard',
//     questions: [
//       {
//         id: 0,
//         question: 'How to create a showroom?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       },
//       {
//         id: 1,
//         question: 'How to add, replace and delete products from the showroom?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       },
//       {
//         id: 2,
//         question: 'How to publish your first showroom and share it across?',
//         body: 'Login pages can be accessed by clicking a Log In or Sign In link somewhere on the home page (usually in the upper-right corner). Then you\'ll enter your email address (or other types of username) in the "Email" text field and your password in the "Password" text field.',
//         vidUrl:
//           'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4'
//       }
//     ]
//   }
// ]

const Help = () => {
  const activeSection = useSelector(selectActiveSection)
  const activeQuestion = useSelector(selectActiveQuestion)
  const dispatch = useDispatch()
  const { FAQs } = getMetadata()
  return (
    <div className={`${classes.wrapper} v-to-center`}>
      <h2>Help</h2>
      <div className={`${classes.querywrap} to-center`}>
        <div className={`${classes.vidwrapper} v-to-center`}>
          <div className={`${classes.vidhead} to-center`}>
            {FAQs[activeSection]?.questions[activeQuestion]?.question}
          </div>
          <div className={`${classes.vid}`}>
            <ReactPlayer
              url={FAQs[activeSection]?.questions[activeQuestion]?.vidUrl}
              width="100%"
              playing={false}
              controls={true}
            />
          </div>
        </div>
        <div className={`${classes.faq} v-to-center`}>
          {FAQs.map((section) => (
            <div className={`${classes.faqitem}`} key={section.id}>
              <div
                className={`${classes.sectionhead} to-center`}
                onClick={() => {
                  if (activeSection === section.id) {
                    dispatch(setActiveSection(-1))
                  } else {
                    dispatch(setActiveSection(section.id))
                  }
                  dispatch(setActiveQuestion(0))
                }}
              >
                <div className={`${classes.headtxt}`}>{section.title}</div>
              </div>
              {activeSection === section.id &&
                section.questions.map((question: any) => (
                  <div className={`${classes.questionwrap}`} key={question.id}>
                    <div
                      className={`${classes.question} to-center`}
                      onClick={() => {
                        if (activeQuestion === question.id) {
                          dispatch(setActiveQuestion(-1))
                        } else {
                          dispatch(setActiveQuestion(question.id))
                        }
                      }}
                    >
                      {!(activeQuestion === question.id) && <PlayIcon />}
                      {activeQuestion === question.id && <PauseIcon />}
                      {question.question}
                    </div>
                    {activeQuestion === question.id && (
                      <div className={`${classes.answer}`}>
                        {`Login pages can be accessed by clicking a Log In or Sign In link
                somewhere on the home page (usually in the upper-right corner).
                Then you'll enter your email address (or other types of
                username) in the "Email" text field and your password in the
                "Password" text field.`}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <div className={`${classes.contactus} to-center`}>
        <div className={classes.head}>Contact us:</div>
        <div>Titan Company Limited</div>
        <div className={classes.separate}>{'+91-(0)4344-664199'}</div>
        <div>corpcomm@titan.co.in</div>
      </div>
    </div>
  )
}

export default Help

/* jscpd:ignore-end */
