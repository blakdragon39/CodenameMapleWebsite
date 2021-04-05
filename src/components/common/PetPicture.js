import React from 'react'
import PropTypes from 'prop-types'

import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets/pets'
import './PetPicture.css'

const PetPicture = ({ pet }) => {

    return (
        <div className='petPicture'>
            <img src={ pet ? PetSpecies[pet.species].picture : petImages.MissingNo } alt='Current Pet' />
        </div>
    )
}

PetPicture.propTypes = {
    pet: PropTypes.object
}

export default PetPicture
