import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_rootHost}/api/users`

const register = async (email, password, displayName) => {
    const response = await axios.post(baseUrl, { email, password, displayName })
    return response.data
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getUser = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
}

const userService = { register, getAll, getUser }
export default userService
