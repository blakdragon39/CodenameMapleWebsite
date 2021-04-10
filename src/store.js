import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/loginReducer'
import petReducer from './reducers/petReducer'
import currentPetReducer from './reducers/currentPetReducer'

export default configureStore({
    reducer: {
        loginState: loginReducer,
        petState: petReducer,
        currentPetState: currentPetReducer
    }
})
