import { useReducer } from "react"

function inputReducer(state, action) {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      }

    case "INPUT_BLUR":
      return {
        ...state,
        isTocuehd: true,
        hasError: !state.isValid && true,
      }

    case "INPUT_VALIDATE":
      return {
        ...state,
        isValid: action.isValid,
      }

    case "INPUT_RESET":
      return {
        isValid: false,
        isTocuehd: false,
        hasError: false,
        value: "",
      }

    default:
      return state
  }
}

const initialInputState = {
  value: "",
  hasError: false,
  isValid: false,
  isTocuehd: false,
}

function useInput(validateFn) {
  const [inputState, dispatch] = useReducer(inputReducer, initialInputState)
  const inputChangeHandler = (event) =>
    dispatch({ type: "INPUT_CHANGE", value: event.target.value, isValid: validateFn(event.target.value) })
  const inputBlurHandler = () => dispatch({ type: "INPUT_BLUR" })
  const inputResetHandler = () => dispatch({ type: "INPUT_RESET" })

  return { inputState, inputChangeHandler, inputBlurHandler, inputResetHandler }
}

export default useInput
