import { useState } from 'react'

const usePendingState = (initialState) => {
    const [pending, setPending] = useState(false)
    const [state, setState] = useState(initialState)
    const [error, setError] = useState(null)

    return {
        pending,
        setPending,
        error,
        setError,
        state,
        setState
    }
}

export default usePendingState
