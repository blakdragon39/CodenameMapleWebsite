import React from 'react'
import PropTypes from 'prop-types'

const Visibility = ({ isVisible, children }) => {
    return isVisible ? (
        <>
            { children }
        </>
    ) : null
}

Visibility.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Visibility
