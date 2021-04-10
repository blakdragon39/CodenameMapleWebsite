import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets'
import './PetCard.css'

const PetCard = ({ pet }) => {

    return (
        <Link to='/adopt-pet' className='petCard'>
            <img src={ pet ? PetSpecies[pet.species].picture : petImages.MissingNo } alt='Pet image' />
            {
                pet ?
                    pet.name :
                    'Adopt a New Pet'
            }
        </Link>
    )
}

PetCard.propTypes = {
    pet: PropTypes.object
}

export default PetCard
