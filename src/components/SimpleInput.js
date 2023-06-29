import { useState } from "react"
import useInput from "../hooks/useInput"

const SimpleInput = (props) => {
  const {
    enteredInput: enteredName,
    inputIsValid: inputNameIsValid,
    hasError: nameInputHasError,
    enteredInputChangeHandler: nameInputChangeHandler,
    enteredInputBlurHandler: nameInputBlurHandler,
    resetInput: resetNameInput,
  } = useInput((name) => name.trim() !== "")

  const {
    enteredInput: enteredEmail,
    inputIsValid: inputEmailIsValid,
    hasError: emailInputHasError,
    enteredInputChangeHandler: emailInputChangeHandler,
    enteredInputBlurHandler: emailInputBlurHandler,
    resetInput: resetEmailInput,
  } = useInput((email) => email.includes("@"))

  let formIsValid = false
  formIsValid = inputNameIsValid && inputEmailIsValid ? true : false

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!inputNameIsValid && !inputEmailIsValid) {
      return
    }

    resetNameInput()
    resetEmailInput()
  }

  const nameInputClasses = nameInputHasError ? "form-control invalid" : "form-control"
  const emailInputClasses = emailInputHasError ? "form-control invalid" : "form-control"

  console.log(nameInputHasError)

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enteredName} onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} />
        {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">Your E-mail</label>
        <input type="email" id="email" value={enteredEmail} onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} />
        {emailInputHasError && <p className="error-text">Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
