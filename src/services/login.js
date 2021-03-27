import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_rootHost}/api/login`

const login = async (email, password) => {
    const response = await axios.post(baseUrl, { email, password })
    return response.data
}

const loginService = { login }
export default loginService
