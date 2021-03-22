import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Surround from './components/Surround'
import './Modal.css'

const LoginForm = ({ visible, setVisible }) => {
    return (
        <Modal
            show={visible}
            onHide={() => setVisible(false)}
            centered={true}>
            <Surround>
                <div>Username: <input /></div>
                <div>Password: <input type='password'/></div>
            </Surround>
        </Modal>
    )
}

LoginForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    setVisible: PropTypes.func.isRequired
}

export default LoginForm
