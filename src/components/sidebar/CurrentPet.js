import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrentPet } from '../../reducers/currentPetReducer'
import { useUser } from '../hooks/userHooks'

import PetPicture from '../common/PetPicture'
import './CurrentPet.css'

const CurrentPet = () => {
    const dispatch = useDispatch()

    const currentPetState = useSelector(store => store.currentPetState)
    const user = useUser()
    const currentPet = currentPetState.pet

    useEffect(async () => await dispatch(getCurrentPet({ userId: user.id })), [])

    let nameDiv

    if (currentPetState.pending) {
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
