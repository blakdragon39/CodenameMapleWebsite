const home = '/'
const adoptPet = '/adopt-pet'
const myPets = '/my-pets'
const myPetId = '/my-pets/:id'
const signUp = '/sign-up'

const toMyPetId = (id) => `/my-pets/${id}`

const routes = {
    home,
    adoptPet,
    myPets,
    myPetId,
    toMyPetId,
    signUp
}

export default routes
