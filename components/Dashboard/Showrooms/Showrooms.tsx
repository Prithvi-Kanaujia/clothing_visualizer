import CreateShowroom from 'components/Dashboard/Showrooms/CreateShowroom/CreateShowroom'
import ProjectCard from 'components/Dashboard/Showrooms/ProjectCard/ProjectCard'
import classes from 'components/Dashboard/Showrooms/Showrooms.module.scss'
import { PlusIcon } from 'components/Icons/GenericIcons'
import { Button } from 'components/shared/Buttons/Buttons'
import { useMetaverse } from 'hooks/useMetaverse'
import { useStart } from 'hooks/useStart'
import React, { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { sendMessage } from 'services/handle-ip'
import { useAppDispatch, useAppSelector } from 'store/hook'
import { selectStarted, setStarted } from 'store/main-loading-slice'
import {
  selectSearchString,
  selectShowCreate,
  selectShowrooms,
  setCreateData,
  setDeleteShowroomId,
  setEditShowroomId,
  setSelectedShowroom,
  setShowCreate,
  setShowShare,
  setShowrooms
} from 'store/showroom-slice'
import { IProjectAction } from 'ts/interfaces'
import { CommunicationIds } from 'utils/communication-ids'
import { getMetadata } from 'utils/globals'

const Showrooms = () => {
  const searchString = useAppSelector(selectSearchString)
  const showCreate = useAppSelector(selectShowCreate)
  const showrooms = useAppSelector(selectShowrooms)
  const started = useAppSelector(selectStarted)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const {
      showroom: { list: items }
    } = getMetadata()
    dispatch(setShowrooms(items))
  }, [])

  const handleCreate = () => {
    dispatch(setShowCreate(true))
  }
  const handleActionClick = (id: string, action: IProjectAction) => {
    if (action.id === 'delete') {
      dispatch(setDeleteShowroomId(id))
    }
    switch (action.id) {
      case 'preview': {
        navigate(`/preview/?id=${id}`)
        break
      }
      case 'creator-mode': {
        dispatch(setCreateData({ createStatus: 'creating' }))
        dispatch(setStarted(true))
        dispatch(setShowCreate(true))
        dispatch(setSelectedShowroom(id))
        // navigate(`/create/?id=${id}`)
        break
      }
      case 'edit-details': {
        dispatch(setEditShowroomId(id))
        break
      }
      case 'delete': {
        dispatch(setDeleteShowroomId(id))
        break
      }
      case 'settings': {
        break
      }
      case 'share': {
        dispatch(setShowShare(true))
        break
      }
    }
  }

  const filteredItems = useMemo(() => {
    return showrooms.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchString.toLocaleLowerCase())
    )
  }, [showrooms, searchString])

  return (
    <div className={`${classes.wrapper} v-to-center`}>
      <div className={`${classes.top} to-center`}>
        <h2>Showrooms</h2>
        <Button
          className={`${classes.create} to-center`}
          onClick={handleCreate}
        >
          <PlusIcon /> Create Showroom
        </Button>
      </div>
      <div className={`${classes.items} to-center scrollbar-hide`}>
        <ProjectCard
          item={{
            id: 'create-new',
            name: 'Create new showroom',
            image: 'images/add.jpg',
            description: ''
          }}
          handleClick={handleCreate}
        />
        {filteredItems.map((item) => {
          return (
            <ProjectCard
              key={item.id}
              item={item}
              onActionClick={(action) => {
                handleActionClick(item.id, action)
              }}
            />
          )
        })}
      </div>
      {showCreate && (
        <CreateShowroom onClose={() => dispatch(setShowCreate(false))} />
      )}
    </div>
  )
}

export default Showrooms
