const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/

  if (state.date === "") {
    errors.date = "Please provide a date"
  }

  if (alphaRegex.test(state.annualLeaveDepartmentReferenceId) === false) {
    errors.annualLeaveDepartmentReferenceId =
      "Please provide an annual leave department reference ID ID"
  }

  if (alphaRegex.test(state.cooMdId) === false) {
    errors.cooMdId = "Please provide a COO MD ID"
  }

  if (alphaRegex.test(state.acknowledgement) === false) {
    errors.acknowledgement = "Please provide an acknowledgement"
  }

  return errors
}

export default findFormErrors
