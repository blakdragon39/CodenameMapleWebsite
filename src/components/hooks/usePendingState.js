import { useState, useEffect } from 'react'

const usePendingState = (initialState, execute) => {
    const [pending, setPending] = useState(false)
    const [state, setState] = useState(initialState)
    const [error, setError] = useState(null)

    const refreshState = async () => {
        setPending(true)

        try {
            setState(await execute())
        } catch (e) {
            console.error(e)
            setError(e.response.data.message)
        }

        setPending(false)
    }

    useEffect(async () => await refreshState(), [])

    return {
        pending,
        error,
        state,
        refreshState,
    }
}

export default usePendingState
