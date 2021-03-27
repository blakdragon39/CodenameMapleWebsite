import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            console.log('state', state)
            console.log('action', action)
            state.user = { username: 'Username Here', password: action, token: 'madeuptoken'}
        },
        logout: (state) => {
            state.user = null
        }
    }
})


export const { login, logout } = loginSlice.actions

export default loginSlice.reducer
