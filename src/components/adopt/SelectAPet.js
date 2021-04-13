import React from 'react'
import PropTypes from 'prop-types'

import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets/petImages'
import './SelectAPet.css'

const usePetImage = (className, species, setSelectedPet) => {
    const onClick = () => setSelectedPet(species)

    return {
        props: {
            className,
            src: species.picture,
            onClick
        },
    }
}

//todo display species name somewhere
const SelectAPet = ({ selectedPet, setSelectedPet }) => {
    const cat = usePetImage('cat', PetSpecies.Cat, setSelectedPet)
    const dog = usePetImage('dog', PetSpecies.Dog,setSelectedPet)
    const rabbit = usePetImage('rabbit', PetSpecies.Rabbit,setSelectedPet)
    const cow = usePetImage('cow', PetSpecies.Cow,setSelectedPet)
    const horse = usePetImage('horse', PetSpecies.Horse,setSelectedPet)
    const dolphin = usePetImage('dolphin', PetSpecies.Dolphin,setSelectedPet)
    const dragon = usePetImage('dragon', PetSpecies.Dragon,setSelectedPet)

    const selectedPetImage = selectedPet ? selectedPet.picture : petImages.MissingNo

    return (
        <div className='selectAPet'>
            <img { ...cat.props } alt='Adopt a cat'/>
            <img { ...dog.props } alt='Adopt a dog' />
            <img { ...rabbit.props} alt='Adopt a rabbit' />
            <img { ...cow.props} alt='Adopt a cow' />
            <img { ...horse.props} alt='Adopt a horse' />
            <img { ...dolphin.props} alt='Adopt a dolphin' />
            <img { ...dragon.props} alt='Adopt a dragon' />
            <img className='selectedPet' src={selectedPetImage} alt='Selected pet to adopt'/>
        </div>
    )
}

SelectAPet.propTypes = {
    selectedPet: PropTypes.object,
    setSelectedPet: PropTypes.func.isRequired
}

export default SelectAPet
