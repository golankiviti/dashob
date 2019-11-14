import React, { useCallback } from 'react';
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/styles'
import classNames from 'classnames'
import styles from './tab.module.scss'
import { exportAllDeclaration } from '@babel/types';

const propTypes = {
    index: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    testPrefix: PropTypes.string.isRequired
};

const useIconButtonStyles = makeStyles({
    root: {
        marginLeft: 'auto'
    }
})

const useIconStyles = makeStyles({
    fontSizeSmall: {
        fontSize: '1rem',
        fontWeight: 'bold'
    }
})


function Tab({ index, name, active, onClick, onClose, testPrefix}) {
    const handleClick = useCallback(() => onClick(index), [onClick, index])
    const handleClose = useCallback(
        (e) => {
            e.stopPropagation();
            onClose(index)
        }, 
        [onClose, index]
    )

    const dataTest = `${testPrefix}-tab-${index}`;

    const iconClasses = useIconStyles()
    const iconButtonClasses = useIconButtonStyles()
    
    const rootClasses = classNames(styles.root, {
        [styles.active]: active
    });

    return <div onClick={handleClick} className={rootClasses} data-test={dataTest}>
        <div className={styles.name} data-test={`${dataTest}-name`}>{name}</div>
        <IconButton onClick={handleClose} 
            size='small'
            classes={iconButtonClasses}
            data-test={`${dataTest}-close-button`}>
            <Icon fontSize='small' classes={iconClasses}>close</Icon>
        </IconButton>
    </div>
};


Tab.propTypes = propTypes;

export default Tab;