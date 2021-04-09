import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import useUser from '../hooks/useUser'

const AuthRequired = ({ children, ...rest }) => {
    const user = useUser()

    return (
        <Route
            { ...rest }
            render={({ location }) =>
                user ?
                    (children) :
                    (<Redirect to={{
                        pathname: '/sign-up',
                        state: { from: location }
                    }}/>)
            } />
    )
}

AuthRequired.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthRequired
