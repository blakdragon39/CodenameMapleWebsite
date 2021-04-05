import React from 'react'
import './theme.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateAPet from './components/createpet/CreateAPet'
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
                        <Route exact path='/sign-up'>
                            <SignUp />
                        </Route>
                        <Route exact path='/create-a-pet'>
                            <CreateAPet />
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
