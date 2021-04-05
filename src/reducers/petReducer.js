import { createSlice } from '@reduxjs/toolkit'

export const petSlice = createSlice({
    name: 'pets',
    initialState: {
        currentPet: null,
        pets: []
    },
    reducers: {

    }
})

export default petSlice.reducer
