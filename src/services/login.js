import axios from 'axios'

const baseUrl = `${process.env.rootHost}/api/login`

const login = async (username, password) => {
    const response = await axios.post(baseUrl, { username, password })
    return response.data
}

const loginService = { login }
export default loginService
