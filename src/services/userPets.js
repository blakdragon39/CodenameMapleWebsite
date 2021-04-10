import axios from 'axios'
import { authHeader } from './headers'

const baseUrl = (userId) => `${process.env.REACT_APP_rootHost}/api/users/${userId}/pets`

const getPets = async (userId) => {
    const response = await axios.get(baseUrl(userId))
    return response.data
}

const createPet = async (userToken, userId, name, species) => {
    const response = await axios.post(baseUrl(userId), {
        name: name,
        species: species
    }, authHeader(userToken))
    return response.data
}

const userPetsService = { getPets, createPet }
export default userPetsService
