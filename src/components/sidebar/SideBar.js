import React from 'react'
import { Link } from 'react-router-dom'

import { useUser, useCurrentPet } from '../hooks/userHooks'
import routes from '../../routes'

import Visibility from '../common/Visibility'
import CurrentPet from './CurrentPet'
import './SideBar.css'

const SideBar = () => {
    const user = useUser()
    const currentPet = useCurrentPet()

    return (
        <Visibility isVisible={user != null}>
            <div className='sideBar'>
                <Link to={currentPet ? routes.toMyPetId(currentPet.id) : routes.adoptPet}>
                    <CurrentPet />
                </Link>
                <Link to={routes.myPets} className='sideBarLink'>My Pets</Link>
            </div>
        </Visibility>
    )
}

export default SideBar
