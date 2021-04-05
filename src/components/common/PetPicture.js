import React from 'react'
import PropTypes from 'prop-types'

import { PetSpecies } from '../../models/Pet'
import pets from '../../assets/pets/pets'
import './PetPicture.css'

const PetPicture = ({ pet }) => {

    return (
        <div className='petPicture'>
            <img src={ pet ? PetSpecies[pet] : pets.MissingNo } alt='Current Pet' />
        </div>
    )
}

PetPicture.propTypes = {
    pet: PropTypes.object
}

export default PetPicture
