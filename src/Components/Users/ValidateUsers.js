const findFormErrors = () => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/
  let validatePrefix = () => {
    if (alphaRegex.test(this.state.prefix) === false) {
      errors.prefix = "Please provide a prefix"
    }
  }
  let validateFirstname = () => {
    if (alphaRegex.test(this.state.first_name) === false) {
      errors.firstName = "Please provide a firstname"
    }
  }
  let validateSurname = () => {
    if (alphaRegex.test(this.state.surname) === false) {
      errors.surname = "Please provide a surname"
    }
  }
  let validateOthernames = () => {
    if (alphaRegex.test(this.state.other_names) === false) {
      errors.otherNames = "Please provide any other name"
    }
  }
  let validateDepartmentId = () => {
    if (alphaRegex.test(this.state.department_id) === false) {
      errors.groupId = "Please provide department ID"
    }
  }
  let validateRoles = () => {
    if (alphaRegex.test(this.state.ballz) === false) {
      errors.roles = "Please provide a role"
    }
  }
  let validatePassword = () => {
    if (this.state.password === "") {
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
