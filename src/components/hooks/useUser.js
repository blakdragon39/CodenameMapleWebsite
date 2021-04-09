import { useSelector } from 'react-redux'

const useUser = () => {
    return useSelector(store => store.loginState.user)
}

export default useUser
