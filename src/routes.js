const home = '/'
const adoptPet = '/adopt-pet'
const petId = '/pet/:id'
const userId = '/user/:id'
const signUp = '/sign-up'
const myItems = '/my-items'

const toPetId = (id) => `/pet/${id}`
const toUserId = (id) => `/user/${id}`

const routes = {
    home,
    adoptPet,
    petId,
    toPetId,
    userId,
    toUserId,
    signUp,
    myItems
}

export default routes
