import React, { useState } from 'react'
import useControlledInput from '../hooks/useControlledInput'
import Button from 'react-bootstrap/Button'
import Surround from '../common/Surround'
import './SignUp.css'

const SignUp = () => {
    const email = useControlledInput('text')
    const password = useControlledInput('password')
    const reEnterPassword = useControlledInput('password')
    const displayName = useControlledInput('text)')

    return (
        <div className='content'>
            <Surround>
                <form>
                    <div>
                        <span>Email:</span>
                        <input {...email} />
                    </div>
                    <div>
                        <span>Password:</span>
                        <input {...password} />
                    </div>
                    <div>
                        <span>Re-enter Password:</span>
                        <input {...reEnterPassword} />
                    </div>
                    <div>
                        <span>Display Name:</span>
                        <input {...displayName} />
                    </div>
                    <div>
                        <Button type='submit' variant='secondary'>Complete Sign-up</Button>
                    </div>
                </form>
            </Surround>
        </div>
    )
}

export default SignUp
