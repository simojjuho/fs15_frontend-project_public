import { useState } from 'react'

const useInput = () => {
    const [value, setValue] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setValue(e.target.value)
    }
    return { value, handleChange }
}

export default useInput