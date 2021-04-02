import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useControlledInput from '../hooks/useControlledInput'

import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Surround from '../common/Surround'
import Visibility from '../common/Visibility'
import './SignUp.css'

import { register, login } from '../../reducers/loginReducer'

const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const loginState = useSelector(store => store.login)
    const email = useControlledInput('email')
    const password = useControlledInput('password')
    const reEnterPassword = useControlledInput('password')
    const displayName = useControlledInput('text)')
    const [error, setError] = useState(null)

    //todo loading states on this and login
    const onSignUpSubmit = async (event) => {
        event.preventDefault()

        const enteredEmail = email.value
        const enteredPassword = password.value

        if (password.value !== reEnterPassword.value) {
            setError('Passwords do not match')
            return
        }

        const result = await dispatch(register({
            password: password.value,
            email: email.value,
            displayName: displayName.value
        }))

        switch (result.type) {
        case register.fulfilled.toString():
            await onSignUpComplete(enteredEmail, enteredPassword)
            break
        case register.rejected.toString():
            setError(result.payload)
            break
        }
    }

    const onSignUpComplete = async (enteredEmail, enteredPassword) => {
        const result = await dispatch(login({
            email: enteredEmail,
            password: enteredPassword
        }))

        switch (result.type) {
        case login.fulfilled.toString():
            console.log('sign up complete')
            history.push('/') //todo redirect to where you were?
            break
        case login.rejected.toString():
            setError(result.payload)
            break
        }
    }

    return (
        <div className='content'>
            <Surround>
                <Visibility show={error !== null}>
                    <Alert variant='danger' dismissible onClose={() => setError(null)}>{ error }</Alert>
                </Visibility>
                <Form onSubmit={onSignUpSubmit}>
                    <Form.Group>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control
                            required
                            autoFocus
                            type={email.type}
                            value={email.value}
                            onChange={email.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password:</Form.Label>
                        <Form.Control
                            required
                            type={password.type}
                            value={password.value}
                            onChange={password.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Re-enter Password:</Form.Label>
                        <Form.Control
                            required
                            type={reEnterPassword.type}
                            value={reEnterPassword.value}
                            onChange={reEnterPassword.onChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Display Name:</Form.Label>
                        <Form.Control
                            required
                            value={displayName.value}
                            onChange={displayName.onChange} />
                    </Form.Group>
                    <Button
                        type='submit'
                        variant='secondary'
                        disabled={loginState.pending}>
                        { loginState.pending ? 'Signing up...' : 'Complete Sign-up' }
                    </Button>
                </Form>
            </Surround>
        </div>
    )
}

export default SignUp
