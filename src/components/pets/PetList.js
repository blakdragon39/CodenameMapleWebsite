import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import userPetsService from '../../services/userPets'
import { useUser } from '../hooks/userHooks'

import PetCard from './PetCard'
import './PetList.css'
import Visibility from '../common/Visibility'

const PetList = () => {
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(false)
    const user = useUser()
    const { id } = useParams()
    //todo loading state
    //todo hook that combines loading with result

    //todo something if there's no pets

    useEffect(async () => setPets(await userPetsService.getPets(id)), [])

    return (
        <div className='petList'>
            {
                pets.map(pet => <PetCard pet={pet} key={pet.id} />)
            }
            <Visibility isVisible={user && user.id === id}>
                <PetCard />
            </Visibility>
        </div>
    )
}

export default PetList
