import { useState } from 'react'

const useControlledInput = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => setValue(event.target.value)

    const clear = () => setValue('')

    return {
        props: {
            type,
            value,
            onChange
        },
        clear
    }
}

export default useControlledInput
