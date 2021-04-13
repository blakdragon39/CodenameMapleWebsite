import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'

import petService from '../../services/pets'
import { setCurrentPet } from '../../reducers/currentPetReducer'
import { useUser, useCurrentPet } from '../hooks/userHooks'

import NotFound from '../NotFound'
import Surround from '../common/Surround'
import PetPicture from '../common/PetPicture'
import './PetDetails.css'
import VerticalSpace from '../common/VerticalSpace'

const PetDetails = () => {
    const [pet, setPet] = useState(null)
    const [error, setError] = useState(null)
    const user = useUser()
    const currentPet = useCurrentPet()
    const { id } = useParams()

    const dispatch = useDispatch()

    useEffect(async () => {
        try {
            setPet(await petService.getPet(id))
        } catch (e) {
            setError(e)
        }
    }, [id])

    const makePetActive = async () => {
        dispatch(setCurrentPet({
            userId: user.id,
            userToken: user.token,
            petId: pet.id
        }))
    }

    const isCurrentPet = currentPet != null && pet != null && currentPet.id === pet.id
    console.log('current pet id', currentPet ?  currentPet.id : null)
    console.log('viewing pet id', pet ? pet.id : null)
    console.log('is current?', isCurrentPet)

    if (pet) {
        return (
            <div className='petDetails'>
                <Surround>
                    <div className='petDetailsGrid'>
                        <div className='detailsPicture'><PetPicture pet={pet} /></div>
                        <div className='detailsStats' />
                        <div className='details'>
                            <div><b>{ pet.name }</b></div>
                            <div>{ pet.species }</div>
                            <VerticalSpace height={8} />
                            { !isCurrentPet ? <Button onClick={makePetActive}>Make Me Your Active Pet!</Button> : null }
                        </div>
                    </div>
                </Surround>
            </div>
        )
    } else if (error) {
        return <NotFound />
    } else {
        return <Spinner animation='border' variant='secondary'/>
    }
}

export default PetDetails
