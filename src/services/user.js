import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_rootHost}/api/users`

const register = async (email, password, displayName) => {
    const response = await axios.post(baseUrl, { email, password, displayName })
    return response.data
}

const userService = { register }
export default userService
