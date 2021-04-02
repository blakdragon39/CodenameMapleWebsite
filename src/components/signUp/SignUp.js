import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import useControlledInput from '../hooks/useControlledInput'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Surround from '../common/Surround'
import Visibility from '../common/Visibility'
import './SignUp.css'

import { register, login } from '../../reducers/loginReducer'

const SignUp = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const email = useControlledInput('text')
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
                <form onSubmit={onSignUpSubmit}>
                    <div className='inputField'>
                        <span>Email:</span>
                        <input
                            required
                            autoFocus
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
                    <div className='inputField'>
                        <span>Re-enter Password:</span>
                        <input
                            required
                            type={reEnterPassword.type}
                            value={reEnterPassword.value}
                            onChange={reEnterPassword.onChange} />
                    </div>
                    <div className='inputField'>
                        <span>Display Name:</span>
                        <input
                            required
                            value={displayName.value}
                            onChange={displayName.onChange} />
                    </div>
                    <div className='buttons'>
                        <Button type='submit' variant='secondary'>Complete Sign-up</Button>
                    </div>
                </form>
            </Surround>
        </div>
    )
}

export default SignUp
