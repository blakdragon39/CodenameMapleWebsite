import React from 'react'
import { useSelector } from 'react-redux'

import PetCard from './PetCard'
import './PetList.css'

const PetList = () => {
    const pets = useSelector(store => store.petState.pets)

    return (
        <div className='petList'>
            {
                pets.map(pet => <PetCard pet={pet} key={pet.id} />)
            }
            <PetCard />
        </div>
    )
}

export default PetList
