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

const getCurrentPet = async (userId) => {
    const response = await axios.get(`${baseUrl(userId)}/current/`)
    return response.data ? response.data : null
}

const setCurrentPet = async (userToken, userId, petId) => {
    const response = await axios.post(`${baseUrl(userId)}/current/${petId}`, { petId: petId }, authHeader(userToken))
    return response.data
}

const userPetsService = { getPets, createPet, getCurrentPet, setCurrentPet }
export default userPetsService
