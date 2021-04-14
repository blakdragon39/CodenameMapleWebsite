import React from 'react'
import PropTypes from 'prop-types'

const Visibility = ({ isVisible, children, ...props }) => {
    return isVisible ? (
        <span {...props} >
            { children }
        </span>
    ) : null
}

Visibility.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export default Visibility
