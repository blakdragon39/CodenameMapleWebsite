import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userService from '../services/user'

export const getPets = createAsyncThunk(
    'pets/get',
    async ({ userId }) => {
        return await userService.getPets(userId)
    }
)

export const petSlice = createSlice({
    name: 'pets',
    initialState: {
        currentPet: null,
        pets: []
    },
    reducers: {
    },
    extraReducers: {
        [getPets.fulfilled]: (state, action) => {
            state.pets = action.payload
            state.currentPet = state.pets[0]
        }
    }
})

export default petSlice.reducer
