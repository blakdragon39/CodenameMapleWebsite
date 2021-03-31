import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import loginService from '../services/login'
import localStorage from '../services/localStorage'

export const login = createAsyncThunk(
    'login/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const user = await loginService.login(email, password)
            localStorage.setUser(user)
            return user
        } catch (e) {
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: localStorage.getUser(),
        error: null
    },
    reducers: {
        resetError: (state) => {
            state.error = null
        },
        logout: (state) => {
            localStorage.setUser(null)
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
            state.error = action.payload
        }
    }
})


export const { resetError, logout } = loginSlice.actions

export default loginSlice.reducer
