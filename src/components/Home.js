import React  from 'react'
import './Home.css'
import { PetSpecies } from '../models/Pet'
import PetPicture from './common/PetPicture'

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
                    petsPreview.map(preview => <PetPicture pet={preview} key={preview.species} />)
                }
            </div>
        </div>
    )
}

export default Home
