import { MusicPlayIcon } from 'components/Icons/GenericIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import ModalPrimary from 'components/shared/Modals/Modals'
import React, { useState } from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { setOpenMusic } from 'store/editor-slice'
import { useAppDispatch } from 'store/hook'
import { assetUrl } from 'utils/constants'
import { GlobalVariables, getMetadata } from 'utils/globals'

import classes from './MusicSelect.module.scss'

const MusicSelect = () => {
  const [step, setStep] = useState(0)
  const [duration, setDuration] = useState(1)
  const [selectedMusic, setSelectedMusic] = useState(0)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const dispatch = useAppDispatch()
  const { musicAudio } = GlobalVariables
  const { musiclist } = getMetadata()
  const timeUpdate = (event: any) => {
    setStep(event.target.currentTime)
  }

  return (
    <div className={` ${classes.wrapper} cover-absolute to-center`}>
      <ModalPrimary
        hasClose
        onClose={() => {
          musicAudio.pause()
          dispatch(setOpenMusic(false))
        }}
        className={`${classes.content}  v-to-center`}
      >
        <h3>Select music for your showroom</h3>
        <div className={`${classes.musiclist} v-to-center`}>
          {musiclist.map((music, index) => {
            return (
              <div
                className={`${classes.musicitem} ${
                  selectedMusic === music.id ? classes.selected : ''
                } to-center`}
                key={index}
              >
                <div
                  className={`${classes['audio-prog']}`}
                  onClick={() => {
                    setSelectedMusic(music.id)
                    musicAudio.setSrc(
                      'https://dl.espressif.com/dl/audio/ff-16b-1c-11025hz.mp3'
                    )
                    musicAudio.onLoadedMetada(() => {
                      setDuration(musicAudio.getDuration())
                      musicAudio.setVolume(1)
                      setMusicPlaying((prev) => !prev)
                      if (!musicPlaying) {
                        musicAudio.play()
                      } else {
                        if (selectedMusic === music.id) {
                          musicAudio.pause()
                        } else {
                          musicAudio.play()
                        }
                      }
                    })
                    musicAudio.onTimeUpdate(timeUpdate)
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={
                      selectedMusic === music.id
                        ? +(step / duration).toFixed(2) * 100
                        : 0
                    }
                    styles={{
                      path: {
                        stroke: '#ffffff'
                      },
                      trail: {
                        stroke: 'var(--titan-black)'
                      },
                      background: {
                        fill: 'var(--titan-black)'
                      }
                    }}
                  >
                    <MusicPlayIcon />
                  </CircularProgressbarWithChildren>
                </div>
                <img src={`${assetUrl}/images/musicimage.png`} alt="" />
                <p>Sunshine and honeybees</p>
                <div className={classes.time}>16:45</div>
                <Button>Add</Button>
              </div>
            )
          })}
        </div>
      </ModalPrimary>
    </div>
  )
}

export default MusicSelect
