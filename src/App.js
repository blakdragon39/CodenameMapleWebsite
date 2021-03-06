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
import Visibility from './components/common/Visibility'
import MyItems from './components/items/MyItems'
import WellbeingShop from './components/shops/WellbeingShop'

const App = () => {
    const user = useUser()
    const className = `main ${user ? 'sideBarOpen' : ''}`

    return (
        <div>
            <div className={className}>
                <Switch>
                    <AuthRequired exact path={routes.adoptPet}>
                        <AdoptAPet />
                    </AuthRequired>
                    <AuthRequired exact path={routes.myItems}>
                        <MyItems />
                    </AuthRequired>

                    <Route exact path={routes.home} component={Home} />
                    <Route exact path={routes.signUp} component={SignUp} />
                    <Route exact path={routes.petId} component={PetDetails} />
                    <Route exact path={routes.userId} component={PetList} />

                    <Route exact path={routes.shops.wellbeingShop} component={WellbeingShop} />

                    <Route path='*'>
                        <NotFound />
                    </Route>
                </Switch>
            </div>

            <Visibility isVisible={user}><SideBar /></Visibility>
            <NavBar />
        </div>
    )
}

export default App
