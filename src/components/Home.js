import React, { useState, useEffect }  from 'react'
import { Link } from 'react-router-dom'

import routes from '../routes'
import userService from '../services/user'

import { PetSpecies } from '../models/Pet'
import VerticalSpace from './common/VerticalSpace'


const Home = () => {
    return (
        <div>
            TODO!<br />
            - sign up/login sharing the same pending flag<br />
            - choose a current pet<br />
            - pet wellness stats: hunger, hygiene, mood<br />
            - items to effect those stats<br />
            - also the entire item system<br />
            <div style={{ marginTop: 32 }}>
                A work in progress, with placeholder art<br />
                Adopt these pets:
                <AdoptablePets />
            </div>
            <VerticalSpace height={8} />
            <UserList />
        </div>
    )
}

const AdoptablePets = () => {
    const petsPreview = Object.keys(PetSpecies)
        .map((species,) => PetSpecies[species])

    return (
        <div> {
            petsPreview.map(preview => (
                <span style={{
                    display: 'inline-flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: 16,
                    textAlign: 'center'
                }} key={preview.species}>
                    <b>{ preview.species }</b>
                    <img src={preview.picture} style={{ height: 100, width: 100 }} />
                </span>
            ))
        } </div>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        setUsers(await userService.getAll())
    }, [])

    return (
        <div>
            Users:
            {
                users.map(user => {
                    return (
                        <div key={user.id} style={{ padding: 8 }}>
                            <Link to={routes.toUserId(user.id)} style={{ color: '#023047' }}>{ user.displayName }</Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home
