import React from 'react'
import './theme.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import AuthRequired from './components/common/AuthRequired'
import AdoptAPet from './components/adopt/AdoptAPet'
import Home from './components/Home'
import NavBar from './components/common/NavBar'
import SideBar from './components/common/sidebar/SideBar'
import SignUp from './components/signUp/SignUp'
import PetList from './components/mypets/PetList'

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
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <AuthRequired exact path='/adopt-pet'>
                            <AdoptAPet />
                        </AuthRequired>
                        <AuthRequired exact path='/my-pets'>
                            <PetList />
                        </AuthRequired>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
