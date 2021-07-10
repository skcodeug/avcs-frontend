const findFormErrors = (state) => {
  const errors = {}
  const alphaRegex = /^[a-zA-Z\s]+$/

  if (state.staffId === "") {
    errors.staffId = "Please provide a staff ID"
  }
  if (state.residence === "") {
    errors.residence = "Please provide a valid residence"
  }
  if (state.nextOfKinId === "") {
    errors.nextOfKinId = "Please provide a next of kin ID"
  }
  if (state.employmentExperience === "") {
    errors.employmentExperience = "Please provide an employment experience"
  }
  if (state.responsibilitiesBefore === "") {
    errors.responsibilitiesBefore = "Please provide a responsibilities"
  }
  if (state.personalSkills === "") {
    errors.personalSkills = "Please provide personal skills"
  }
  if (state.periodOfAvailability === "") {
    errors.periodOfAvailability = "Please provide a next of kin ID"
  }
  if (state.expectedDate === "") {
    errors.expectedDate = "Please provide expected date"
  }

  return errors
}

export default findFormErrors
