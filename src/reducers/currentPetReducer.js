import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userPetsService from '../services/userPets'

export const getCurrentPet = createAsyncThunk(
    'currentPet/get',
    async ({ userId }) => {
        return await userPetsService.getCurrentPet(userId)
    }
)

const currentPetSlice = createSlice({
    name: 'currentPet',
    initialState: {
        pet: null,
        pending: false
    },
    extraReducers: {
        [getCurrentPet.pending]: (state) => {
            state.pending = true
        },
        [getCurrentPet.fulfilled]: (state, action) => {
            state.pet = action.payload
            state.pending = false
        },
        [getCurrentPet.rejected]: (state) => {
            state.pending = false
        }
    }
})

export default currentPetSlice.reducer
