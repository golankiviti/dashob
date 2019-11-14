import React from 'react'
import { shallow } from 'enzyme'
import { Tab } from '../'
import { getTab } from './driver.enzyme'

const makeProps = (props = {}) => {
    const initialProps = {
        name: 'New Board',
        index: 0,
        active: false,
        onClick: jest.fn(),
        onClose: jest.fn(),
        testPrefix: 'tabs'
    };

    return Object.assign({}, initialProps, props)
}

describe('Tab Component', () => {
    it('Displays the name of the tab', () => {
        const props = makeProps();
        const wrapper = shallow(<Tab {...props} />);

        const actual = getTab(wrapper, props.index).getName()
        const expected = props.name

        expect(actual).toEqual(expected)
    })
})