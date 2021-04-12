import React  from 'react'
import './Home.css'
import { PetSpecies } from '../models/Pet'
import PetPicture from './common/PetPicture'
import VerticalSpace from './common/VerticalSpace'

const Home = () => {
    const petsPreview = Object.keys(PetSpecies).map((species,) => PetSpecies[species])

    return (
        <div className='home'>
            TODO!<br />
            - sign up/login sharing the same pending flag<br />
            - choose a current pet<br />
            - pet wellness stats: hunger, hygiene, mood<br />
            - items to effect those stats<br />
            - also the entire item system<br />
            <div style={{ marginTop: 32 }}>
                A work in progress, with placeholder art<br />
                Adopt these pets:
                {
                    petsPreview.map(preview => (
                        <div style={{ padding: 16, textAlign: 'center' }} key={preview.species}>
                            <b>{ preview.species }</b>
                            <VerticalSpace height={16} />
                            <PetPicture pet={preview} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home
