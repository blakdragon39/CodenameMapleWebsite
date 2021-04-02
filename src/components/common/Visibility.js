import React from 'react'
import PropTypes from 'prop-types'

const Visibility = ({ show, ...props }) => (
    <>
        {
            show ? props.children : null
        }
    </>
)

Visibility.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
}

export default Visibility
