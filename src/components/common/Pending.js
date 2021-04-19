import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-bootstrap/Spinner'

import Visibility from './Visibility'

const Pending = ({ pending }) => {
    return (
        <>
            <Visibility isVisible={pending}>
                <Spinner animation='border' variant='secondary' />
            </Visibility>
        </>
    )
}

Pending.propTypes = {
    pending: PropTypes.bool.isRequired
}

export default Pending
