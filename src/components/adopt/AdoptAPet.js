import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import userPetsService from '../../services/userPets'
import { setCurrentPet } from '../../reducers/currentPetReducer'
import { useUser } from '../hooks/userHooks'
import routes from '../../routes'

import SelectAPet from './SelectAPet'
import Surround from '../common/Surround'
import useControlledInput from '../hooks/useControlledInput'
import Visibility from '../common/Visibility'
import VerticalSpace from '../common/VerticalSpace'
import './AdoptAPet.css'

const AdoptAPet = () => {
    const [selectedPet, setSelectedPet] = useState(null)
    const [loading, setLoading] = useState(false)
    const petName = useControlledInput('text')

    const user = useUser()

    const dispatch = useDispatch()
    const history = useHistory()

    const submitCreatePet = async (e) => {
        e.preventDefault()
        setLoading(true)

        const result = await userPetsService.createPet(
            user.token,
            user.id,
            petName.props.value,
            selectedPet.species
        )

        await dispatch(setCurrentPet({
            userToken: user.token,
            userId: user.id,
            petId: result.payload.id
        }))

        setLoading(false)
        history.push(routes.toUserId(user.id))
    }

    return (
        <div className='adoptAPet'>
            <SelectAPet selectedPet={selectedPet} setSelectedPet={setSelectedPet} />
            <VerticalSpace height={24} />
            <Visibility isVisible={selectedPet != null}>
                <div className='speciesTitle'>{ selectedPet ? selectedPet.species : '' }</div>
                <Surround>
                    <Form onSubmit={submitCreatePet}>
                        <Form.Group>
                            <Form.Label>Give it a name!</Form.Label>
                            <Form.Control { ...petName.props } />
                        </Form.Group>
                        <Button
                            type='submit'
                            variant='secondary'
                            disabled={loading}>
                            { loading ? 'Adopting...' : 'Adopt this pet!' }
                        </Button>
                    </Form>
                </Surround>
            </Visibility>
        </div>
    )
}

export default AdoptAPet
