import React from 'react'
import './theme.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AdoptAPet from './components/createpet/AdoptAPet'
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

                    <Switch>
                        <Route exact path='/adopt-pet'>
                            <AdoptAPet />
                        </Route>
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
