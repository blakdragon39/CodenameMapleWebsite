import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

export const login = createAsyncThunk(
    'login/login',
    async (email, password) => {
        return await loginService.login(email, password)
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null
    },
    reducers: {
        logout: (state) => {
            state.user = null
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            console.log('state', state)
            console.log('action', action)
        }
    }
})


export const { logout } = loginSlice.actions

export default loginSlice.reducer
