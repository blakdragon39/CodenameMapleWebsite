import React from 'react'
import './AdoptAPet.css'
import missingno from  '../../assets/pets/missingno.png'

import { PetSpecies } from '../../models/Pet'

const AdoptAPet = () => {
    return (
        <div className='adoptAPet'>
            <img className='cat' src={PetSpecies.Cat.picture} />
            <img className='dog' src={PetSpecies.Dog.picture} />
            <img className='rabbit' src={PetSpecies.Rabbit.picture} />
            <img className='cow' src={PetSpecies.Cow.picture} />
            <img className='horse' src={PetSpecies.Horse.picture} />
            <img className='dolphin' src={PetSpecies.Dolphin.picture} />
            <img className='dragon' src={PetSpecies.Dragon.picture} />
            <img className='selectedPet' src={missingno} />
        </div>
    )
}

export default AdoptAPet
