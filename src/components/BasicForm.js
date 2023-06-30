import useInput from "../hooks/useInput"

const isNotEmpty = (value) => value.trim() !== ""
const isEmail = (value) => value.includes("@")

const BasicForm = (props) => {
  const {
    inputState: firstNameState,
    inputChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    inputResetHandler: firstNameReset,
  } = useInput(isNotEmpty)
  const {
    inputState: LastNameState,
    inputChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    inputResetHandler: lastNameReset,
  } = useInput(isNotEmpty)
  const {
    inputState: emailState,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputResetHandler: emailReset,
  } = useInput(isEmail)

  const firstNameClasses = firstNameState.hasError ? "form-control invalid" : "form-control"
  const lastNameClasses = LastNameState.hasError ? "form-control invalid" : "form-control"
  const emailClasses = emailState.hasError ? "form-control invalid" : "form-control"

  let formIsValid = false

  formIsValid = firstNameState.isValid && LastNameState.isValid && emailState.isValid ? true : false

  const submitHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) return

    firstNameReset()
    lastNameReset()
    emailReset()
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" value={firstNameState.value} onChange={firstNameChangeHandler} onBlur={firstNameBlurHandler} />
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" value={LastNameState.value} onChange={lastNameChangeHandler} onBlur={lastNameBlurHandler} />
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="email" id="email" value={emailState.value} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
