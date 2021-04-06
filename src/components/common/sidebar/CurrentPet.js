import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPets } from '../../../reducers/petReducer'

import PetPicture from '../PetPicture'
import './CurrentPet.css'

const CurrentPet = () => {
    const dispatch = useDispatch()

    const petState = useSelector(store => store.petState)
    const user = useSelector(store => store.loginState.user)

    useEffect(async () => await dispatch(getPets({ userId: user.id })), [])

    let nameDiv

    if (petState.pending) {
        nameDiv = '...'
    } else if (!petState.currentPet) {
        nameDiv = (<Link to='/adopt-pet'>Adopt a New Pet!</Link>)
    } else {
        nameDiv = petState.currentPet.name
    }

    return (
        <div className='currentPet'>
            <PetPicture pet={petState.currentPet} />
            <div className='currentPetName'>{ nameDiv }</div>
        </div>
    )
}

export default CurrentPet
