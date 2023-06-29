import { useState } from "react"

function useInput(validateFn) {
  const [enteredInput, setEnteredInput] = useState("")
  const [isTouched, setIsTouched] = useState(false)

  const enteredInputChangeHandler = (event) => setEnteredInput(event.target.value)
  const enteredInputBlurHandler = () => setIsTouched(true)

  const inputIsValid = validateFn(enteredInput)
  const hasError = !inputIsValid && isTouched

  const resetInput = () => {
    setEnteredInput("")
    setIsTouched(false)
  }

  return {
    enteredInput,
    inputIsValid,
    hasError,
    enteredInputChangeHandler,
    enteredInputBlurHandler,
    resetInput,
  }
}

export default useInput
