const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/

  if (state.date === "") {
    errors.date = "Please provide a date"
  }

  if (state.staff_id === "") {
    errors.staff_id = "Please provide a staff ID"
  }

  if (state.period === "") {
    errors.period = "Please provide a period"
  }

  if (alphaRegex.test(state.purpose) === false) {
    errors.purpose = "Please provide a purpose"
  }

  if (state.staff_id === "") {
    errors.backup_staff_id = "Please provide a backup staff ID"
  }

  if (state.last_date === "") {
    errors.last_date = "Please provide the last date"
  }

  if (state.return_date === "") {
    errors.return_date = "Please provide a return date"
  }

  if (state.contact_address === "") {
    errors.contact_address = "Please provide current address"
  }

  return errors
}

export default findFormErrors
