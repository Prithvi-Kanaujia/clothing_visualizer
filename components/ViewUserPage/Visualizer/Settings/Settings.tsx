import { LeftArrowIconSecondary } from 'components/Icons/EditorViewIcons'
import MobileViewKnob from 'components/shared/MobileViewKnob/MobileViewKnob'
import React from 'react'
import { isMobile } from 'react-device-detect'

import Filters, { FiltersProps } from './Filters/Filters'
import classes from './Settings.module.scss'

type VisualizerSettingsProps = {
  onExit: () => void
} & FiltersProps

function VisualizerSettings(props: VisualizerSettingsProps) {
  const { onExit } = props
  const $filtersRef = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    if ($filtersRef.current) {
      const bottomPadding = isMobile ? 10 : 0
      const offsetTop = $filtersRef.current.offsetTop + bottomPadding
      $filtersRef.current.style.height = `calc(100% - ${offsetTop}px)`
    }
  }, [props.filters])

  return (
    <div className={isMobile ? classes.mobileWrapper : classes.wrapper}>
      {isMobile && <div className={classes.knob}>
        <MobileViewKnob />
      </div>}
      <div className={`${isMobile ? '' : classes.top} ${classes.text}`} onClick={() => {
        if (isMobile) return
        onExit()
      }}>
        {!isMobile && <LeftArrowIconSecondary />}
        <p className={isMobile ? classes.filterText : ''}>Filter</p>
        {/* <div className={classes.filtersWrapper}>

        </div> */}
      </div>
      <div ref={$filtersRef} className={`${classes.filters} ${classes.text}`}>
        <Filters
          filters={props.filters}
          onSetFilter={(id: string, value: any) => {
            props.onSetFilter(id, value)
          }}
        />
      </div>
      <div className={`${classes.actionBtns} ${classes.text}`}>
        <p onClick={onExit}>Close</p>
        <p>Apply</p>
      </div>
    </div>
  )
}

export default VisualizerSettings
