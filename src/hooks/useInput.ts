import { useState } from 'react'

const useInput = (amount: number) => {
    const [value, setValue] = useState(`${amount}`)
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        setValue(e.target.value)
    }
    return { value, handleChange }
}

export default useInput