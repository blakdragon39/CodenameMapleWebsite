import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

import userPetsService from '../../services/userPets'
import usePendingState from '../hooks/usePendingState'
import { useUser } from '../hooks/userHooks'

import PetCard from './PetCard'
import Visibility from '../common/Visibility'
import './PetList.css'

const PetList = () => {
    const petState = usePendingState([])
    const user = useUser()
    const { id } = useParams()

    useEffect(async () => {
        petState.setPending(true)

        try {
            petState.setState(await userPetsService.getPets(id))
        } catch (e) {
            petState.setError(e)
        }

        petState.setPending(false)
    }, [])

    return (
        <div>
            <Visibility isVisible={petState.error}>
                <Alert variant='danger'>{ petState.error }</Alert>
            </Visibility>
            <Visibility isVisible={petState.pending}>
                <Spinner animation='border' variant='secondary' />
            </Visibility>
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
