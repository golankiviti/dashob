import React from 'react'
import { shallow } from 'enzyme'
import { fromJS } from 'immutable'
import { Tab, Tabs } from '../'

const makeProps = props => {
    const tabs = fromJS([
        {
            id: '1',
            name: 'Board #1',
            webtiles: []
        },
        {
            id: '2',
            name: 'Board #2',
            webtiles: []
        }
    ])
    const initialProps = {
        tabs,
        activeIndex: 0,
        onClick: jest.fn(),
        onClose: jest.fn()
    }

    return Object.assign({}, initialProps, props)
}

describe('Tabs', () => {
    it('Renders Tab component for each tab in props.tabs', () => {
        const props = makeProps()
        const wrapper = shallow(<Tabs {...props} />);
        
        expect(wrapper.find(Tab)).toHaveLength(props.tabs.size)
    })
})