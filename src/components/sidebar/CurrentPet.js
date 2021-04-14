import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCurrentPet } from '../../reducers/currentPetReducer'
import { useUser } from '../hooks/userHooks'

import PetPicture from '../common/PetPicture'
import VerticalSpace from '../common/VerticalSpace'
import './CurrentPet.css'

const CurrentPet = () => {
    const dispatch = useDispatch()

    const currentPetState = useSelector(store => store.currentPetState)
    const user = useUser()
    const currentPet = currentPetState.pet

    useEffect(async () => await dispatch(getCurrentPet({ userId: user.id })), [])

    let name

    if (currentPetState.pending) {
        name = '...'
    } else if (!currentPet) {
        name = 'Adopt a New Pet!'
    } else {
        name = currentPet.name
    }

    return (
        <div className='currentPet'>
            <PetPicture pet={currentPet} />
            <VerticalSpace height={4} />
            <b>{ name }</b>
        </div>
    )
}

export default CurrentPet
