import React from 'react'
import { useSelector } from 'react-redux'

import Visibility from '../Visibility'
import CurrentPet from './CurrentPet'
import './SideBar.css'

const SideBar = () => {
    const user = useSelector(store => store.loginState.user)

    return (
        <Visibility isVisible={user != null}>
            <div className='sideBar'>
                <CurrentPet />
            </div>
        </Visibility>
    )
}

export default SideBar
