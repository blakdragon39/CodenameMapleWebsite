import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import petService from '../../services/pets'
import VerticalSpace from '../common/VerticalSpace'
import NotFound from '../NotFound'

const MyPet = () => {
    const [pet, setPet] = useState(null)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(async () => {
        try {
            setPet(await petService.getPet(id))
        } catch (e) {
            setError(e)
        }
    }, [id])

    if (pet) {
        return (
            <div>
                {pet.species}
                <VerticalSpace height={16} />
                {pet.name}
            </div>
        )
    } else if (error) {
        return <NotFound />
    } else {
        return <Spinner />
    }
}

export default MyPet
