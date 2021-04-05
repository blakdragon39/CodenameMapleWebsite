import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPets } from '../../../reducers/petReducer'

import PetPicture from '../PetPicture'
import './CurrentPet.css'

const CurrentPet = () => {
    const dispatch = useDispatch()

    const currentPet = useSelector(store => store.pets.currentPet)
    const user = useSelector(store => store.login.user)

    console.log('user', user)

    // useEffect(async () => await dispatch(getPets({ userId: user.id })), [])

    return (
        <div className='currentPet'>
            <PetPicture pet={currentPet} />
        </div>
    )
}

export default CurrentPet
