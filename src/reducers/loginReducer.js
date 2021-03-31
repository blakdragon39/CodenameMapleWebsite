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
        user: localStorage.getUser()
    },
    reducers: {
        logout: (state) => {
            localStorage.setUser(null)
            state.user = null
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.user = action.payload
        },
        [login.rejected]: (state) => {
            state.user = null
        }
    }
})


export const { logout } = loginSlice.actions

export default loginSlice.reducer
