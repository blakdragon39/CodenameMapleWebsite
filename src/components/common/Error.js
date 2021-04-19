import React from 'react'
import PropTypes from 'prop-types'
import Alert from 'react-bootstrap/Alert'

import Visibility from './Visibility'

const Error = ({ error }) => {
    return (
        <>
            <Visibility isVisible={error}>
                <Alert variant='danger'>{ error }</Alert>
            </Visibility>
        </>
    )
}

Error.propTypes = {
    error: PropTypes.any.isRequired
}

export default Error
