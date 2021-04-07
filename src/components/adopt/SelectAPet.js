import React, { useState } from 'react'
import { PetSpecies } from '../../models/Pet'
import petImages from '../../assets/pets'
import './SelectAPet.css'

const usePetImage = (className, species) => {
    return {
        props: {
            className,
            src: species.picture
        },
    }
}

const SelectAPet = () => {
    const cat = usePetImage('cat', PetSpecies.Cat)
    const dog = usePetImage('dog', PetSpecies.Dog)
    const rabbit = usePetImage('rabbit', PetSpecies.Rabbit)
    const cow = usePetImage('cow', PetSpecies.Cow)
    const horse = usePetImage('horse', PetSpecies.Horse)
    const dolphin = usePetImage('dolphin', PetSpecies.Dolphin)
    const dragon = usePetImage('dragon', PetSpecies.Dragon)

    return (
        <div className='selectAPet'>
            <img { ...cat.props } alt='Adopt a cat'/>
            <img { ...dog.props } alt='Adopt a dog' />
            <img { ...rabbit.props} alt='Adopt a rabbit' />
            <img { ...cow.props} alt='Adopt a cow' />
            <img { ...horse.props} alt='Adopt a horse' />
            <img { ...dolphin.props} alt='Adopt a dolphin' />
            <img { ...dragon.props} alt='Adopt a dragon' />
            <img className='selectedPet' src={petImages.MissingNo} alt='Selected pet to adopt'/>
        </div>
    )
}

export default SelectAPet
