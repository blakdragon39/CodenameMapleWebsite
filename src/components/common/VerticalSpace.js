import React from 'react'
import PropTypes from 'prop-types'

const VerticalSpace = ({ height }) => (
    <div style={{ height }} />
)

VerticalSpace.propTypes = {
    height: PropTypes.number.isRequired
}

export default VerticalSpace
