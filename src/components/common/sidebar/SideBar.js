import React from 'react'
import { Link } from 'react-router-dom'

import { useUser, useCurrentPet } from '../../hooks/userHooks'
import routes from '../../../routes'

import Visibility from '../Visibility'
import CurrentPet from './CurrentPet'
import './SideBar.css'

const SideBar = () => {
    const user = useUser()
    const currentPet = useCurrentPet()

    return (
        <Visibility isVisible={user != null}>
            <div className='sideBar'>
                <Link to={currentPet ? routes.myPets : routes.adoptPet}>
                    <CurrentPet />
                </Link>
            </div>
        </Visibility>
    )
}

export default SideBar
