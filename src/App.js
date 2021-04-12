import React from 'react'
import './theme.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import routes from './routes'

import AuthRequired from './components/common/AuthRequired'
import AdoptAPet from './components/adopt/AdoptAPet'
import Home from './components/Home'
import NavBar from './components/common/NavBar'
import SideBar from './components/common/sidebar/SideBar'
import SignUp from './components/signUp/SignUp'
import PetList from './components/mypets/PetList'
import NotFound from './components/NotFound'

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className='main'>
                    <Switch>
                        <AuthRequired exact path={routes.adoptPet}>
                            <AdoptAPet />
                        </AuthRequired>
                        <AuthRequired exact path={routes.myPets}>
                            <PetList />
                        </AuthRequired>

                        <Route exact path={routes.signUp}>
                            <SignUp />
                        </Route>
                        <Route exact path={routes.home}>
                            <Home />
                        </Route>

                        <Route path='*'>
                            <NotFound />
                        </Route>
                    </Switch>
                </div>

                <NavBar />
                <SideBar />
            </BrowserRouter>
        </div>
    )
}

export default App
