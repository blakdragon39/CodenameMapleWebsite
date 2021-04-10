import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Visibility from '../Visibility'
import CurrentPet from './CurrentPet'
import './SideBar.css'

const SideBar = () => {
    const user = useSelector(store => store.loginState.user)

    return (
        <Visibility isVisible={user != null}>
            <div className='sideBar'>
                <Link to={user.currentPetId ? '/my-pets' : '/adopt-pet'}>
                    <CurrentPet />
                </Link>
            </div>
        </Visibility>
    )
}

export default SideBar
