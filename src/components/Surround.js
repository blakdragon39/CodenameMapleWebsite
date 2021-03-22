import React from 'react'
import PropTypes from 'prop-types'
import theme from '../theme'

const style = {
    background: theme.colors.primary,
    padding: 16,
    border: `8px solid ${theme.colors.primaryHighlight}`,
    borderRadius: 16
}

const Surround = (props) => {
    return (
        <div style={style}>
            { props.children }
        </div>
    )
}

Surround.propTypes = {
    children: PropTypes.node.isRequired
}

export default Surround
