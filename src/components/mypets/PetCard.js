import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import routes from '../../routes'

import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets'
import './PetCard.css'

const PetCard = ({ pet }) => {
    return pet ? (<MyPetCard pet={pet} />) : (<NewPetCard />)
}

const MyPetCard = ({ pet }) => {
    return (
        <Link to={`/my-pets/${pet.id}`} className='petCard'>
            <img src={ pet ? PetSpecies[pet.species].picture : petImages.MissingNo } alt={pet.name} />
            { pet.name }
        </Link>
    )
}

const NewPetCard = () => {
    return (
        <Link to={routes.adoptPet} className='petCard'>
            <img src={petImages.MissingNo} alt='Adopt a New Pet' />
            Adopt a New Pet
        </Link>
    )
}

PetCard.propTypes = {
    pet: PropTypes.object
}

MyPetCard.propTypes = {
    pet: PropTypes.object.isRequired
}

export default PetCard
