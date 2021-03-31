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
                    <div className='inputField'>
                        <span>Email:</span>
                        <input required {...email} />
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
