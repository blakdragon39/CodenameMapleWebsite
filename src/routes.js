const home = '/'
const adoptPet = '/adopt-pet'
const myPets = '/my-pets'
const myPetId = '/my-pets/:id'
const userId = '/user/:id'
const signUp = '/sign-up'

const toMyPetId = (id) => `/my-pets/${id}`
const toUserId = (id) => `/user/${id}`

const routes = {
    home,
    adoptPet,
    myPets,
    myPetId,
    toMyPetId,
    userId,
    toUserId,
    signUp
}

export default routes
