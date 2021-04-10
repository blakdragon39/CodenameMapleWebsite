import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPets } from '../../../reducers/petReducer'
import { useUser, useCurrentPet } from '../../hooks/userHooks'

import PetPicture from '../PetPicture'
import './CurrentPet.css'

const CurrentPet = () => {
    const dispatch = useDispatch()

    const petState = useSelector(store => store.petState)
    const user = useUser()
    const currentPet = useCurrentPet()

    useEffect(async () => await dispatch(getPets({ userId: user.id })), [])

    let nameDiv

    if (petState.pending) {
        nameDiv = '...'
    } else if (!currentPet) {
        nameDiv = 'Adopt a New Pet!'
    } else {
        nameDiv = currentPet.name
    }

    return (
        <div className='currentPet'>
            <PetPicture pet={currentPet} />
            <div className='currentPetName'>{ nameDiv }</div>
        </div>
    )
}

export default CurrentPet
