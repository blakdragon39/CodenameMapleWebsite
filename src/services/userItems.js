import axios from 'axios'
import { authHeader } from './headers'

const baseUrl = (userId) => `${process.env.REACT_APP_rootHost}/api/users/${userId}/items`

const getItems = async (userToken, userId) => {
    const response = await axios.get(baseUrl(userId), authHeader(userToken))
    return response.data
}

const userItemsService = { getItems }
export default userItemsService
