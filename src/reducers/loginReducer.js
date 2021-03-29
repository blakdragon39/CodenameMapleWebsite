import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'

export const login = createAsyncThunk(
    'login/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            return await loginService.login(email, password)
        } catch (e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: null,
        error: null
    },
    reducers: {
        resetError: (state) => {
            state.error = null
        },
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
            console.log('rejected action', action)
            state.user = null
            state.error = action.payload
        }
    }
})


export const { resetError, logout } = loginSlice.actions

export default loginSlice.reducer
