import React, { useCallback } from 'react'
import { Map } from 'immutable'
import { useSelector, useDispatch } from 'react-redux'
import { createSelector } from 'reselect'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/styles'
import { Tabs } from './'
import { changeIndex } from '../../redux/activeTab/actionCreators'
import { addBoard, removeBoard } from '../../redux/boards/actionCreators'
import styles from './tabsContainer.module.scss'

const useAddTabStyles = makeStyles({
  root: {
      width: '24px',
      height: '24px',
      marginLeft: '4px',
      marginRight: '4px',
      padding: 0
  }
})

const selectTabs = createSelector(
    state => state.boards,
    boards => boards.map(x => Map({
      id: x.get('id'),
      name: x.get('name')
    }))
)

export default function TabsContainer() {
    const tabs = useSelector(selectTabs)
    const activeIndex = useSelector(state => state.activeTab)
    const dispatch = useDispatch()
    const handleClick = useCallback(
      (index) => dispatch(changeIndex(index)),
      [dispatch]
    )
    const handleClose = useCallback(
      (index) => {
        const tabsSize = tabs.size

        if (tabsSize !== 1) {
          dispatch(removeBoard(index))
          if (index === tabsSize - 1) {
            handleClick(index - 1)
          }
        }
      },
      [dispatch, tabs]
    )
    const handleAdd = useCallback(
      () => dispatch(addBoard()),
      [dispatch]
    )

    const addTabClasses = useAddTabStyles()

    return (
      <div className={styles.root}>
        <Tabs tabs={tabs}
          activeIndex={activeIndex}
          onClick={handleClick}
          onClose={handleClose} />
        <IconButton onClick={handleAdd}
          size='small'
          classes={addTabClasses}
          data-test={'tabs-add-button'}>
            <Icon fontSize='small'>add</Icon>
        </IconButton>
      </div>
    )
}