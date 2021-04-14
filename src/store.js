import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/loginReducer'
import currentPetReducer from './reducers/currentPetReducer'

export default configureStore({
    reducer: {
        loginState: loginReducer,
        currentPetState: currentPetReducer
    }
})
