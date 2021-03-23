import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import LoginForm from '../LoginForm'

const Home = () => {
    const [ loginVisible, setLoginVisible ] = useState(false)

    return (
        <div>
            <Button onClick={() => setLoginVisible(true)}>Login</Button>
            <LoginForm
                setVisible={setLoginVisible}
                visible={loginVisible} />
        </div>
    )
}

export default Home
