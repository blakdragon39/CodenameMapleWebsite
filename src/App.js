import React from 'react'
import './theme.css'
import { Route, Switch } from 'react-router-dom'

import { useUser } from './components/hooks/userHooks'
import routes from './routes'

import AuthRequired from './components/common/AuthRequired'
import AdoptAPet from './components/adopt/AdoptAPet'
import Home from './components/Home'
import NavBar from './components/common/NavBar'
import SideBar from './components/sidebar/SideBar'
import SignUp from './components/signUp/SignUp'
import PetList from './components/pets/PetList'
import NotFound from './components/NotFound'
import PetDetails from './components/pets/PetDetails'

function App() {
    const className = `main ${useUser() ? 'sideBarOpen' : ''}`

    return (
        <div>
            <div className={className}>
                <Switch>
                    <AuthRequired exact path={routes.adoptPet}>
                        <AdoptAPet />
                    </AuthRequired>
                    <AuthRequired exact path={routes.myPets}>
                        <PetList />
                    </AuthRequired>
                    <AuthRequired exact path={routes.myPetId}>
                        <PetDetails />
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
