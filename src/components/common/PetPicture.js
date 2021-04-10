import React from 'react'
import PropTypes from 'prop-types'

import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets'
import './PetPicture.css'

const PetPicture = ({ pet }) => {

    console.log('pet', pet)

    return (
        <div className='petPicture'>
            <div className='petPictureBackground'>
                <img src={ pet ? PetSpecies[pet.species].picture : petImages.MissingNo } alt='Current Pet' />
            </div>
        </div>
    )
}

PetPicture.propTypes = {
    pet: PropTypes.object
}

export default PetPicture
