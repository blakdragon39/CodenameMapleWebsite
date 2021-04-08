import axios from 'axios'
import { authHeader } from './headers'

const baseUrl = `${process.env.REACT_APP_rootHost}/api/pets`

const createPet = async (userToken, userId, name, species) => {
    const response = await axios.post(baseUrl, {
        userId: userId,
        name: name,
        species: species
    }, authHeader(userToken))
    return response.data
}

const petService = { createPet }
export default petService
