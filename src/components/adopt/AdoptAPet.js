import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { createPet } from '../../reducers/petReducer'
import { useUser } from '../hooks/userHooks'

import SelectAPet from './SelectAPet'
import Surround from '../common/Surround'
import useControlledInput from '../hooks/useControlledInput'
import Visibility from '../common/Visibility'
import VerticalSpace from '../common/VerticalSpace'

const AdoptAPet = () => {
    const [selectedPet, setSelectedPet] = useState(null)
    const petName = useControlledInput('text')

    const user = useUser()
    const petState = useSelector(store => store.petState)

    const dispatch = useDispatch()
    const history = useHistory()

    const submitCreatePet = async (e) => {
        e.preventDefault()
        await dispatch(createPet({
            userToken: user.token,
            userId: user.id,
            name: petName.props.value,
            species: selectedPet.species
        }))

        history.push('/my-pets')
    }

    return (
        <div style={{ padding: 32 }}>
            <SelectAPet selectedPet={selectedPet} setSelectedPet={setSelectedPet} />
            <VerticalSpace height={24} />
            <Visibility isVisible={selectedPet != null}>
                <Surround>
                    <Form onSubmit={submitCreatePet}>
                        <Form.Group>
                            <Form.Label>Give it a name!</Form.Label>
                            <Form.Control { ...petName.props } />
                        </Form.Group>
                        <Button
                            type='submit'
                            variant='secondary'
                            disabled={petState.adoptionPending}>
                            { petState.adoptionPending ? 'Adopting...' : 'Adopt this pet!' }
                        </Button>
                    </Form>
                </Surround>
            </Visibility>
        </div>
    )
}

export default AdoptAPet
