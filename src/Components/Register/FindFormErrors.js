const findFormErrors = (state) => {
  const errors = {}

  if (state.email === "") {
    errors.email = "Enter a valid email e.g abc@avcs.co.ug"
  }
  if (state.password === "") {
    errors.password = "Enter a valid password"
  }

  return errors
}

export default findFormErrors
