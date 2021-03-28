import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from './reducers/loginReducer'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Surround from './components/Surround'
import './css/Modal.css'

const LoginForm = ({ visible, setVisible }) => {
    const dispatch = useDispatch()
    const loginState = useSelector(store => store.login)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log('login state', loginState)

    const tryLogin = (e) => {
        e.preventDefault()
        console.log('logging in', email, password)
        dispatch(login({ email, password }))
    }

    return (
        <Modal
            show={visible}
            onHide={() => setVisible(false)}
            centered={true}>
            <Surround>
                <form onSubmit={tryLogin}>
                    <div>
                        Username:
                        <input
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className='marginBottom'>
                        Password:
                        <input
                            type='password'
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <Button type='submit' variant='secondary'>Login</Button>
                </form>
            </Surround>
        </Modal>
    )
}

LoginForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

export default LoginForm
