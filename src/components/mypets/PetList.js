import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPets } from '../../reducers/petReducer'
import { useUser } from '../hooks/userHooks'

import PetCard from './PetCard'
import './PetList.css'

const PetList = () => {
    const pets = useSelector(store => store.petState.pets)
    const user = useUser()

    const dispatch = useDispatch()

    useEffect(() => dispatch(getPets({ userId: user.id })), [])

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
