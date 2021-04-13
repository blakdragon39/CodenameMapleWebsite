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
import VerticalSpace from '../common/VerticalSpace'
import Wellbeing from './wellbeing/Wellbeing'
import './PetDetails.css'

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

    if (pet) {
        return (
            <div className='petDetails'>
                <Surround>
                    <div className='petDetailsInner'>
                        <div className='petDetailsColumn1'>
                            <div><PetPicture pet={pet} /></div>
                            <div className='petDetailsAbout'>
                                <b>{ pet.name }</b>
                                { pet.species }
                                <VerticalSpace height={8} />
                                { !isCurrentPet ? <Button onClick={makePetActive}>Make Me Your Active Pet!</Button> : null }
                            </div>
                        </div>
                        <div className='petDetailsColumn2'>
                            <div className='petDetailsWellbeing'>
                                <Wellbeing
                                    hunger={pet.wellbeing.hunger}
                                    hygiene={pet.wellbeing.hygiene}
                                    mood={pet.wellbeing.mood} />
                            </div>
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
