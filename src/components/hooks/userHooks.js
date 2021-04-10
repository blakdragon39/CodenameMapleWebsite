import { useSelector } from 'react-redux'

export const useUser = () => {
    return useSelector(store => store.loginState.user)
}

export const useCurrentPet = () => {
    const user = useUser()
    const pets = useSelector(store => store.petState.pets)

    return pets.find(pet => pet.id === user.currentPetId)
}
