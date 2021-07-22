const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/

  if (state.date === "") {
    errors.date = "Please provide a date"
  }

  if (alphaRegex.test(state.annualLeaveReferenceId) === false) {
    errors.annualLeaveReferenceId =
      "Please provide an annual leave reference ID"
  }

  if (alphaRegex.test(state.recommederId) === false) {
    errors.recommederId = "Please provide a recommender ID"
  }

  if (alphaRegex.test(state.acknowledgement) === false) {
    errors.acknowledgement = "Please provide an acknowledgement"
  }

  return errors
}

export default findFormErrors
