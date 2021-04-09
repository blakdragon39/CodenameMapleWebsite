import React from 'react'
import './theme.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRequired from './components/common/AuthRequired'
import AdoptAPet from './components/adopt/AdoptAPet'
import Home from './components/Home'
import NavBar from './components/common/NavBar'
import SideBar from './components/common/sidebar/SideBar'
import SignUp from './components/signUp/SignUp'

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <div style={{ display: 'flex' }}>
                    <SideBar />

                    {/* TODO redirect user to sign up if not logged in on appropriate pages */}
                    <Switch>
                        <AuthRequired exact path='/adopt-pet'>
                            <AdoptAPet />
                        </AuthRequired>
                        <Route exact path='/sign-up'>
                            <SignUp />
                        </Route>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
