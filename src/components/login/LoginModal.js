import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

import { login, resetError } from '../../reducers/loginReducer'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Surround from '../common/Surround'
import './LoginModal.css'

const LoginModal = ({ visible, setVisible }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const loginState = useSelector(store => store.login)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const focusRef = useRef()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        //todo errors if no email/password entered
        const result = await dispatch(login({ email, password }))
        switch (result.type) {
        case login.rejected.toString():
            setPassword('')
            break
        case login.fulfilled.toString():
            dismissLogin()
            history.push('/')
            break
        }
    }

    useEffect(() => {
        if (visible) {
            focusRef.current.focus()
        }
    }, [visible])

    const dismissError = () => dispatch(resetError())

    const dismissLogin = () => {
        dismissError()
        setEmail('')
        setPassword('')
        setVisible(false)
    }

    return (
        <Modal
            show={visible}
            onHide={dismissLogin}
            centered={true}>

            <Surround reverse>
                {
                    loginState.error ?
                        <Alert variant='danger' dismissible onClose={dismissError}>{ loginState.error }</Alert> :
                        null
                }
                <form onSubmit={onSubmitLogin}>
                    <div className='inputField'>
                        <span>Email:</span>
                        <input
                            ref={focusRef}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='inputField'>
                        <span>Password:</span>
                        <input
                            type='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className='buttons'>
                        <Button type='submit' variant='secondary'>Login</Button>
                        <Button variant='outline-secondary'>Forgot Password</Button>
                    </div>
                </form>
            </Surround>
        </Modal>
    )
}

LoginModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

export default LoginModal