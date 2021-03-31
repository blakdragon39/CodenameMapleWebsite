import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropType from 'prop-types'

import { logout } from '../reducers/loginReducer'

import Button from 'react-bootstrap/Button'
import LoginModal from '../LoginModal'
import '../css/NavBar.css'

const NavBar = () => {
    const loginState = useSelector(store => store.login)
    const [ loginVisible, setLoginVisible ] = useState(false)

    return (
        <div className='navBar'>
            {
                loginState.user ?
                    <UserInfo user={loginState.user} /> :
                    <LoginSignup setLoginVisible={setLoginVisible} />
            }
            <LoginModal
                setVisible={setLoginVisible}
                visible={loginVisible} />
        </div>
    )
}

const UserInfo = ({ user }) => {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <div className='userInfo'>
            Welcome, { user.displayName }
            <Button variant='outline-secondary' onClick={onLogout}>Logout</Button>
        </div>
    )
}

UserInfo.propTypes = {
    user: PropType.object.isRequired
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
