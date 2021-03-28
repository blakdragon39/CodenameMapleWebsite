import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

export const login = createAsyncThunk(
    'login/login',
    async ({ email, password }) => {
        return await loginService.login(email, password)
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user = null
            state.error = null
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.user = action.payload
            state.error = null
        },
        [login.rejected]: (state, action) => {
            state.user = null
            state.error = action.error
        }
    }
})


export const { logout } = loginSlice.actions

export default loginSlice.reducer
