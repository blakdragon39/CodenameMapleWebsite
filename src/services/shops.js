import axios from 'axios'

const baseUrl = (shopId) => `${process.env.REACT_APP_rootHost}/api/shops/${shopId}`

const get = async (shopId) => {
    const response = await axios.get(baseUrl(shopId))
    return response.data
}

const shopService = { get }
export default shopService
