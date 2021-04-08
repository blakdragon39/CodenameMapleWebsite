export const authHeader = (userToken) => {
    return {
        headers: {
            Authorization: userToken
        }
    }
}
