import { useState } from 'react'

const useControlledInput = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => setValue(event.target.value)

    return {
        type,
        value,
        onChange
    }
}

export default useControlledInput
