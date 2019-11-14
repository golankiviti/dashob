import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Tab from './Tab'
import styles from './tabs.module.scss'

const propTypes = {
    tabs: ImmutablePropTypes.list.isRequired,
    activeIndex: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
}

export default function Tabs({tabs, activeIndex, onClick, onClose}) {
    const dataTest = 'tabs'
    
    return (
        <div className={styles.container}
            data-test={`${dataTest}-container`}>
            {
                tabs.map((x, index) => 
                    <Tab key={x.get('id')}
                        index={index}
                        name={x.get('name')}
                        active={index === activeIndex}
                        onClick={onClick}
                        onClose={onClose}
                        testPrefix={dataTest} />
                )
            }
        </div>
    )
}

Tabs.propTypes = propTypes