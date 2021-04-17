import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'
import PropTypes from 'prop-types'

import { login } from '../../reducers/loginReducer'
import routes from '../../routes'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Surround from '../common/Surround'
import Visibility from '../common/Visibility'
import './LoginModal.css'

const LoginModal = ({ visible, setVisible }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const loginState = useSelector(store => store.loginState)
    const email = useControlledInput('email')
    const password = useControlledInput('password')
    const [error, setError] = useState(null)

    const focusRef = useRef()

    const onSubmitLogin = async (e) => {
        e.preventDefault()

        const result = await dispatch(login({
            email: email.props.value,
            password: password.props.value
        }))

        switch (result.type) {
        case login.fulfilled.toString():
            dismissLogin()
            history.push(routes.home)
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
                <Visibility isVisible={error}>
                    <Alert variant='danger' dismissible onClose={dismissError}>{ error }</Alert>
                </Visibility>
                <Form onSubmit={onSubmitLogin}>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            required
                            ref={focusRef}
                            { ...email.props } />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            required
                            { ...password.props } />
                    </Form.Group>
                    <div className='login-buttons'>
                        <Button
                            type='submit'
                            variant='secondary'
                            disabled={loginState.pending}>{ loginState.pending ? 'Logging In...' : 'Login'}</Button>
                        <Button variant='outline-secondary'>Forgot Password</Button>
                    </div>
                </Form>
            </Surround>
        </Modal>
    )
}

LoginModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

export default LoginModal
