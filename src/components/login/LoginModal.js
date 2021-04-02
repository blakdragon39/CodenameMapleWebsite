import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'
import PropTypes from 'prop-types'

import { login } from '../../reducers/loginReducer'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Surround from '../common/Surround'
import './LoginModal.css'
import Visibility from '../common/Visibility'

const LoginModal = ({ visible, setVisible }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const email = useControlledInput('text')
    const password = useControlledInput('password')
    const [error, setError] = useState(null)

    const focusRef = useRef()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        const result = await dispatch(login({
            email: email.value,
            password: password.value
        }))

        switch (result.type) {
        case login.fulfilled.toString():
            dismissLogin()
            history.push('/')
            break
        case login.rejected.toString():
            setError(result.payload)
            password.clear()
            break
        }
    }

    useEffect(() => {
        if (visible) {
            focusRef.current.focus()
        }
    }, [visible])

    const dismissError = () => setError(null)

    const dismissLogin = () => {
        dismissError()
        email.clear()
        password.clear()
        setVisible(false)
    }

    return (
        <Modal
            show={visible}
            onHide={dismissLogin}
            centered={true}>

            <Surround reverse>
                <Visibility show={error !== null}>
                    <Alert variant='danger' dismissible onClose={dismissError}>{ error }</Alert>
                </Visibility>
                <form onSubmit={onSubmitLogin}>
                    <div className='inputField'>
                        <span>Email:</span>
                        <input
                            ref={focusRef}
                            required
                            value={email.value}
                            onChange={email.onChange} />
                    </div>
                    <div className='inputField'>
                        <span>Password:</span>
                        <input
                            required
                            type={password.type}
                            value={password.value}
                            onChange={password.onChange} />
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
