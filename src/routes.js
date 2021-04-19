const home = '/'
const adoptPet = '/adopt-pet'
const petId = '/pet/:id'
const userId = '/user/:id'
const signUp = '/sign-up'
const myItems = '/my-items'

const wellbeing = '/shop/wellbeing'

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
    myItems,

    shops: {
        wellbeing
    }
}

export default routes
