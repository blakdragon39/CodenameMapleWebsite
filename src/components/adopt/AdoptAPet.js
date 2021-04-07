import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import SelectAPet from './SelectAPet'
import Surround from '../common/Surround'
import useControlledInput from '../hooks/useControlledInput'
import Visibility from '../common/Visibility'

const AdoptAPet = () => {
    const [selectedPet, setSelectedPet] = useState(null)
    const petName = useControlledInput('text')

    const createPet = (e) => {
        e.preventDefault()
        console.log('creating ')
    }

    return (
        <div style={{ padding: 32 }}>
            <SelectAPet selectedPet={selectedPet} setSelectedPet={setSelectedPet}/>
            <br />
            <Visibility isVisible={selectedPet}>
                <Surround>
                    <Form onSubmit={createPet}>
                        <Form.Group>
                            <Form.Label>Give it a name!</Form.Label>
                            <Form.Control { ...petName.props }/>
                        </Form.Group>
                    </Form>
                    <Button type='submit' variant='secondary'>Adopt this pet!</Button>
                </Surround>
            </Visibility>
        </div>
    )
}

export default AdoptAPet
