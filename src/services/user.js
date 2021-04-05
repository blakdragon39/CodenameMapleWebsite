import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_rootHost}/api/users`

const register = async (email, password, displayName) => {
    const response = await axios.post(baseUrl, { email, password, displayName })
    return response.data
}

const getPets = async (userId) => {
    const response = await axios.get(`${baseUrl}/${userId}/pets`)
    return response.data
}

const userService = { register, getPets }
export default userService
