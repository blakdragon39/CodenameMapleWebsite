import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './reducers/loginReducer'
import petReducer from './reducers/petReducer'

export default configureStore({
    reducer: {
        loginState: loginReducer,
        petState: petReducer
    }
})
