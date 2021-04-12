import React from 'react'
import './theme.css'
import { Route, Switch } from 'react-router-dom'

import routes from './routes'

import AuthRequired from './components/common/AuthRequired'
import AdoptAPet from './components/adopt/AdoptAPet'
import Home from './components/Home'
import NavBar from './components/common/NavBar'
import SideBar from './components/sidebar/SideBar'
import SignUp from './components/signUp/SignUp'
import PetList from './components/mypets/PetList'
import NotFound from './components/NotFound'
import MyPet from './components/mypets/MyPet'

function App() {
    return (
        <div>
            <div className='main'>
                <Switch>
                    <AuthRequired exact path={routes.adoptPet}>
                        <AdoptAPet />
                    </AuthRequired>
                    <AuthRequired exact path={routes.myPets}>
                        <PetList />
                    </AuthRequired>
                    <AuthRequired exact path={routes.myPetId}>
                        <MyPet />
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
        </div>
    )
}

export default App
