const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/

  if (state.date === "") {
    errors.date = "Please provide a date"
  }

  if (alphaRegex.test(state.annualLeaveRecommenderReferenceId) === false) {
    errors.annualLeaveRecommenderReferenceId =
      "Please provide an annual leave recommender reference ID ID"
  }

  if (alphaRegex.test(state.departmentHeadId) === false) {
    errors.departmentHeadId = "Please provide a department head ID"
  }

  if (alphaRegex.test(state.purpose) === false) {
    errors.purpose = "Please provide aN acknowledgement"
  }

  return errors
}

export default findFormErrors
