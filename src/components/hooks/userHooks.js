import { useSelector } from 'react-redux'

export const useUser = () => {
    return useSelector(store => store.loginState.user)
}

export const useCurrentPet = () => {
    return useSelector(store => store.currentPetState.pet)
}
