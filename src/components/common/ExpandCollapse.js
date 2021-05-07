import React from 'react'
import PropTypes from 'prop-types'

import doubleArrow from '../../assets/icons/double_arrow.png'
import './ExpandCollapse.css'

const ExpandCollapse = ({ isOpen, onClick }) => {
    return (
        <div id='expandCollapse'>
            <img
                className={`${isOpen ? 'openArrow' : 'closedArrow'}`}
                alt={isOpen ? 'collapseArrow' : 'expandArrow'}
                src={doubleArrow}
                onClick={onClick} />
        </div>
    )
}

ExpandCollapse.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

export default ExpandCollapse
