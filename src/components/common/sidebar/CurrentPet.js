import React from 'react'
import { useSelector } from 'react-redux'

import PetPicture from '../PetPicture'
import './CurrentPet.css'

const CurrentPet = () => {
    const currentPet = useSelector(store => store.pets.currentPet)

    return (
        <div className='currentPet'>
            <PetPicture pet={currentPet} />
        </div>
    )
}

export default CurrentPet
