import React from 'react'

import CurrentPet from './CurrentPet'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className='sideBar'>
            <CurrentPet pet={'Arcanine'}/>
        </div>
    )
}

export default SideBar
