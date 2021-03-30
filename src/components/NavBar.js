import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import PropType from 'prop-types'

import Button from 'react-bootstrap/Button'
import LoginForm from '../LoginForm'
import '../css/NavBar.css'

const NavBar = () => {
    const loginState = useSelector(store => store.login)
    const [ loginVisible, setLoginVisible ] = useState(false)

    //todo automatically focus LoginModal email
    //todo dismiss modal on login, do this by redirecting?

    return (
        <div className='navBar'>
            {
                loginState.user ?
                    <div>Welcome, { loginState.user.displayName }</div> :
                    <LoginSignup setLoginVisible={setLoginVisible} />
            }
            <LoginForm
                setVisible={setLoginVisible}
                visible={loginVisible} />
        </div>
    )
}

const LoginSignup = ({ setLoginVisible }) => {
    return (
        <div>
            <Button variant='outline-secondary' onClick={() => setLoginVisible(true)}>Login</Button>
            <Button variant='outline-secondary'>Sign-up</Button>
        </div>
    )
}

LoginSignup.propTypes = {
    setLoginVisible: PropType.func.isRequired
}

export default NavBar
