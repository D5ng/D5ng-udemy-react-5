import { useEffect, useState } from "react"

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("")
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

  useEffect(() => {
    if (enteredName.trim().length !== 0) {
      setEnteredNameIsValid(true)
    }
  }, [enteredName])

  const nameInputChangeHandler = (event) => setEnteredName(event.target.value)
  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (enteredName.trim().length === "") {
      setEnteredNameIsValid(false)
      return
    }
  }

  const nameInputClasses = enteredNameIsValid ? "form-control" : "form-control invalid"

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={enteredName} onChange={nameInputChangeHandler} />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
