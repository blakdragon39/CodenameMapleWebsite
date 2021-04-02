import React from 'react'
import PropTypes from 'prop-types'
import './Surround.css'

const Surround = ({ reverse, ...props }) => {
    return (
        <div className={reverse ? 'surroundReverse' : 'surround'}>
            { props.children }
        </div>
    )
}

Surround.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

Surround.displayName = 'Surround'

export default Surround
