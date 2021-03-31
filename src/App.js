import React from 'react'
import './theme.css'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './home/Home'
import NavBar from './components/NavBar'

function App() {
    return (
        <div>
            <NavBar />
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
