import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_rootHost}/api/pets`

const getPet = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const petService = { getPet }
export default petService
