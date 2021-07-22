const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/

  if (alphaRegex.test(state.prefix) === false) {
    errors.prefix = "Please provide a prefix"
  }

  if (alphaRegex.test(state.firstName) === false) {
    errors.firstName = "Please provide a firstname"
  }

  if (alphaRegex.test(state.surname) === false) {
    errors.surname = "Please provide a surname"
  }

  if (alphaRegex.test(state.otherNames) === false) {
    errors.otherNames = "Please provide any other name"
  }

  if (state.departmentId === "") {
    errors.departmentId = "Please provide department ID"
  }

  if (alphaRegex.test(state.roles) === false) {
    errors.roles = "Please provide a role"
  }

  if (state.password === "") {
    errors.password = "Please provide a password"
  }

  return errors
}

export default findFormErrors
