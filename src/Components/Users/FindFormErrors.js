const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/
  let validatePrefix = () => {
    if (alphaRegex.test(state.prefix) === false) {
      errors.prefix = "Please provide a prefix"
    }
  }
  let validateFirstname = () => {
    if (alphaRegex.test(state.firstName) === false) {
      errors.firstName = "Please provide a firstname"
    }
  }
  let validateSurname = () => {
    if (alphaRegex.test(state.surname) === false) {
      errors.surname = "Please provide a surname"
    }
  }
  let validateOthernames = () => {
    if (alphaRegex.test(state.otherNames) === false) {
      errors.otherNames = "Please provide any other name"
    }
  }
  let validateDepartmentId = () => {
    if (state.departmentId === "") {
      errors.departmentId = "Please provide department ID"
    }
  }
  let validateRoles = () => {
    if (alphaRegex.test(state.roles) === false) {
      errors.roles = "Please provide a role"
    }
  }
  let validatePassword = () => {
    if (state.password === "") {
      errors.password = "Please provide a password"
    }
  }

  validatePrefix()
  validateFirstname()
  validateSurname()
  validateOthernames()
  validateDepartmentId()
  validateRoles()
  validatePassword()

  return errors
}

export default findFormErrors
