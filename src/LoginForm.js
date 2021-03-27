import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { login } from './reducers/loginReducer'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Surround from './components/Surround'
import './css/Modal.css'

const LoginForm = ({ visible, setVisible }) => {
    const dispatch = useDispatch()

    const tryLogin = (e) => {
        e.preventDefault()
        dispatch(login({password: 'supersecretpassword'}))
    }

    return (
        <Modal
            show={visible}
            onHide={() => setVisible(false)}
            centered={true}>
            <Surround>
                <form onSubmit={tryLogin}>
                    <div>Username: <input /></div>
                    <div className='marginBottom'>Password: <input type='password'/></div>
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
