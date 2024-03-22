import React, { Fragment, useEffect } from 'react'
import { updateShowroomHelperObject } from 'utils/constants'
import { SceneVariables } from 'utils/engine'
import { IClickEvent, ShowroomHelper } from 'utils/engine/ShowroomIntegrator'

import classes from './Viewport.module.scss'

export interface inProps {
  onClick: (evt: IClickEvent) => void
}
const Viewport = React.memo((props: inProps) => {
  const { onClick } = props
  useEffect(() => {
    SceneVariables.SceneSetup()
    SceneVariables.EngineHardwareSetup()
    SceneVariables.InitializeFreeCamera() // for showroom
    SceneVariables.InitializeArcRotateCamera() // for configurator
    SceneVariables.EnableEngineInspector()
    const ob = new ShowroomHelper('P1', onClick)
    updateShowroomHelperObject(ob)
  }, [])

  return (
    <Fragment>
      <canvas id="render-canvas" className={classes.canvas}></canvas>
    </Fragment>
  )
})

export default Viewport
