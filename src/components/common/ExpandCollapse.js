import React from 'react'
import PropTypes from 'prop-types'

import doubleArrow from '../../assets/icons/double_arrow.png'
import './ExpandCollapse.css'

const ExpandCollapse = ({ isOpen }) => {
    const className = `expandCollapse ${isOpen ? 'open' : 'closed'}`
    return (
        <img
            className={className}
            src={doubleArrow}
            alt={isOpen ? 'collapseArrow' : 'expandArrow'} />
    )
}

ExpandCollapse.propTypes = {
    isOpen: PropTypes.bool.isRequired
}

export default ExpandCollapse
