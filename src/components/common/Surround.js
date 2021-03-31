import React from 'react'
import PropTypes from 'prop-types'
import './Surround.css'

const Surround = (props) => {
    return (
        <div className='surround'>
            { props.children }
        </div>
    )
}

Surround.propTypes = {
    children: PropTypes.node.isRequired
}

Surround.displayName = 'Surround'

export default Surround
