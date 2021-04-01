import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import useControlledInput from '../hooks/useControlledInput'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Surround from '../common/Surround'
import Visibility from '../common/Visibility'
import './SignUp.css'

import { register } from '../../reducers/loginReducer'

const SignUp = () => {
    const dispatch = useDispatch()

    const email = useControlledInput('text')
    const password = useControlledInput('password')
    const reEnterPassword = useControlledInput('password')
    const displayName = useControlledInput('text)')
    const [error, setError] = useState(null)

    const onSignUpSubmit = async (event) => {
        event.preventDefault()

        //todo make sure passwords are the same
        const result = await dispatch(register({
            password: password.value,
            email: email.value,
            displayName: displayName.value
        }))


        switch (result.type) {
        case register.fulfilled.toString():
            //todo login
            console.log('register success')
            break
        case register.rejected.toString():
            setError(result.payload)
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
                        <input required autoFocus {...email} />
                    </div>
                    <div className='inputField'>
                        <span>Password:</span>
                        <input required {...password} />
                    </div>
                    <div className='inputField'>
                        <span>Re-enter Password:</span>
                        <input required {...reEnterPassword} />
                    </div>
                    <div className='inputField'>
                        <span>Display Name:</span>
                        <input required {...displayName} />
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
