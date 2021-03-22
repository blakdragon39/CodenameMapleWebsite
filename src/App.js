import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import LoginForm from './LoginForm'

const style = {
}

function App() {
    const [ loginVisible, setLoginVisible ] = useState(true)

    return (
        <div style={style}>
            <LoginForm
                visible={loginVisible}
                setVisible={setLoginVisible}/>
        </div>
    )
}

export default App
