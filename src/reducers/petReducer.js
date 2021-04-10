import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userPetsService from '../services/userPets'

export const getPets = createAsyncThunk(
    'pets/get',
    async ({ userId }) => {
        return await userPetsService.getPets(userId)
    }
)

export const createPet = createAsyncThunk(
    'pets/create',
    async ({ userToken, userId, name, species }) => {
        return await userPetsService.createPet(userToken, userId, name, species)
    }
)

export const petSlice = createSlice({
    name: 'pets',
    initialState: {
        pets: [],
        pending: false,
        adoptionPending: false
    },
    reducers: {
    },
    extraReducers: {
        [getPets.pending]: (state) => {
            state.pending = true
        },
        [getPets.fulfilled]: (state, action) => {
            state.pets = action.payload
            state.currentPet = state.pets[0]
            state.pending = false
        },
        [getPets.rejected]: (state) => {
            state.pending = false
        },
        [createPet.pending]: (state) => {
            state.adoptionPending = true
        },
        [createPet.fulfilled]: (state, action) => {
            state.pets.push(action.payload)
            state.adoptionPending = false
        },
        [createPet.rejected]: (state) => {
            state.adoptionPending = false
        }
    }
})

export default petSlice.reducer
