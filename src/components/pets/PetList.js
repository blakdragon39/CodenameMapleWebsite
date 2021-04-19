import React from 'react'
import { useParams } from 'react-router-dom'

import userPetsService from '../../services/userPets'
import usePendingState from '../hooks/usePendingState'
import { useUser } from '../hooks/userHooks'

import PetCard from './PetCard'
import Visibility from '../common/Visibility'
import Error from '../common/Error'
import Pending from '../common/Pending'
import './PetList.css'

const PetList = () => {
    const user = useUser()
    const { id } = useParams()

    const petState = usePendingState([], () => userPetsService.getPets(id))

    return (
        <div>
            <Error error={petState.error} />
            <Pending pending={petState.pending} />
            <div className='petList'>
                {
                    petState.state.map(pet => <PetCard pet={pet} key={pet.id} />)
                }
                <Visibility isVisible={user && user.id === id}>
                    <PetCard />
                </Visibility>
            </div>
        </div>
    )
}

export default PetList
