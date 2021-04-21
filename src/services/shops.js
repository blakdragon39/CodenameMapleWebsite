import axios from 'axios'
import { authHeader } from './headers'

const baseUrl = (shopId) => `${process.env.REACT_APP_rootHost}/api/shops/${shopId}`

const get = async (shopId) => {
    const response = await axios.get(baseUrl(shopId))
    return response.data
}

const addMoreItems = async (shopId) => {
    const response = await axios.post(baseUrl(shopId))
    return response.data
}

const buyItem = async(shopId, itemId, userId, userToken) => {
    const response = await axios.put(baseUrl(shopId), {
        userId: userId,
        itemId: itemId
    }, authHeader(userToken))

    return response.data
}

const shopService = { get, addMoreItems, buyItem }
export default shopService
