const home = '/'
const adoptPet = '/adopt-pet'
const petId = '/pet/:id'
const userId = '/user/:id'
const signUp = '/sign-up'
const myItems = '/my-items'

const wellbeingShop = '/shop/wellbeing'

const toPetId = (id) => `/pet/${id}`
const toUserId = (id) => `/user/${id}`
const withReload = (route) => `${route}/reload`

const routes = {
    home,
    adoptPet,
    petId,
    toPetId,
    userId,
    toUserId,
    signUp,
    myItems,
    withReload,

    shops: {
        wellbeingShop
    }
}

export default routes
