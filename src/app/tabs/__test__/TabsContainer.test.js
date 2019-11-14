import React from 'react'
import { shallow, mount } from 'enzyme'
import { fromJS } from 'immutable'
import { TabsContainer, Tabs, Tab } from '../'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { getTab, addTab } from './driver.enzyme'
import { changeIndex } from '../../../redux/activeTab/actionCreators'
import { addBoard, removeBoard } from '../../../redux/boards/actionCreators'

const mockStore = configureStore([])
const initialState = {
    boards: fromJS([
        {
            name: '1',
            id: '1',
            webTiles:[]
        },
        {
            name: '2',
            id: '2',
            webTiles:[]
        }
    ]),
    activeTab: 0
}
const makeState = state => Object.assign({}, initialState, state)


describe('TabsContainer - connects to redux and implements logic for the Tabs component', () => {
    describe(`handleClick - handles click event on tab.
            arguments: index - the index of the new active tab`, () => {
        it('Changes the active tab index according to the index from args', () => {
            const store = mockStore(initialState)
            const wrapper = mount(
                <Provider store={store}>
                    <TabsContainer />
                </Provider>
            )
            
            const index = 1
            const tab = getTab(wrapper, index)
            tab.click()

            const actualPayload = store.getActions()[0]
            const expectedPayload = changeIndex(index)

            expect(expectedPayload).toEqual(actualPayload)
        })

        it('When the index from the argument equals to activeTab in redux state, do nothing', () => {
            const store = mockStore(initialState)
            const wrapper = mount(
                <Provider store={store}>
                    <TabsContainer />
                </Provider>
            )

            const index = initialState.activeTab
            const tab = getTab(wrapper, index)
            tab.click()

            expect(store.getActions).toHaveLength(0)
        })
    })

    describe(`handleClose - handles close event on tab.
            arguments: index - the index of the closing tab`, () => {
        it('Removes the board that his index is the index from args', () => {
            const store = mockStore(initialState)
            const wrapper = mount(
                <Provider store={store}>
                    <TabsContainer />
                </Provider>
            )
            
            const index = 0
            const tab = getTab(wrapper, index)
            tab.close()
            
            const actualPayload = store.getActions()[0]
            const expectedPayload = removeBoard(index)

            expect(actualPayload).toEqual(expectedPayload)
        })

        it('Does not close the last remaining tab', () => {
            const state = {
                boards: fromJS([
                    {
                        name: '1',
                        id: '1',
                        webTiles:[]
                    }
                ]),
                activeTab: 0
            }
            const store = mockStore(state)
            const wrapper = mount(
                <Provider store={store}>
                    <TabsContainer />
                </Provider>
            )
            
            const tab = getTab(wrapper, 0)
            tab.close()

            expect(store.getActions()).toHaveLength(0)
        })

        it('When the active tab is the last one, decrease active tab index by 1', () => {
            const state = makeState({ activeTab: 1 })
            const store = mockStore(state)
            const wrapper = mount(
                <Provider store={store}>
                    <TabsContainer />
                </Provider>
            )
            
            const index = state.activeTab
            const tab = getTab(wrapper, index)
            tab.close()
            
            const changeIndexPayload = changeIndex(index - 1)

            expect(store.getActions()).toContainEqual(changeIndexPayload)
        })
    })
    
    describe('handleAdd - handle click event on the add tab button.', () => {
        it('Adds a new board.', () => {
            const store = mockStore(initialState)
            const wrapper = mount(
                <Provider store={store}>
                    <TabsContainer />
                </Provider>
            )

            addTab(wrapper)

            const actualPayload = store.getActions()[0]
            const expectedPayload = addBoard()

            expect(actualPayload).toEqual(expectedPayload)

        })
    })
    
    it('Renders Tabs component', () => {
        const store = mockStore(initialState)
        const providerWrapper = mount(
            <Provider store={store}>
                <TabsContainer />
            </Provider>
        )
        const wrapper = providerWrapper.find(TabsContainer)

        expect(wrapper.find(Tabs)).toHaveLength(1)
    })
})