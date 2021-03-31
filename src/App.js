import React from 'react'
import './theme.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/common/NavBar'
import SignUp from './components/signUp/SignUp'

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />

                <Switch>
                    <Route exact path='/sign-up'>
                        <SignUp />
                    </Route>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
