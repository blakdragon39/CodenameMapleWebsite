import React from 'react'
import PropTypes from 'prop-types'

import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets'
import './PetPicture.css'

const PetPicture = ({ pet }) => pet ? <PopulatedPetPicture pet={pet} /> : <UnPopulatedPetPicture />

const PopulatedPetPicture = ({ pet }) => {
    return (
        <div className='petPicture'>
            <div className='petPictureBackground'>
                <img src={ PetSpecies[pet.species].picture } alt={pet.name} />
            </div>
        </div>
    )
}

const UnPopulatedPetPicture = () => {
    return (
        <div className='petPicture'>
            <div className='petPictureBackground'>
                <img src={ petImages.MissingNo } alt='No pet' />
            </div>
        </div>
    )
}

PetPicture.propTypes = {
    pet: PropTypes.object
}

PopulatedPetPicture.propTypes = {
    pet: PropTypes.object.isRequired
}

export default PetPicture
