const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.staffId === "") {
    errors.staffId = "Enter a valid ID";
  }
  if (state.staffRef === "") {
    errors.staffRef = "Enter a valid reference";
  }
  if (state.applicationLetter === "") {
    errors.applicationLetter = "Enter a valid letter";
  }
  if (state.refereeLetter === "") {
    errors.refereeLetter = "Enter a valid letter";
  }
  if (state.interviewEvaluationReferenceId === "") {
    errors.interviewEvaluationReferenceId = "Enter a valid ID";
  }
  if (state.managementRecommendation === "") {
    errors.managementRecommendation = "Enter a valid recommendation";
  }
  if (state.appointmentApproval === "") {
    errors.appointmentApproval = "Enter a valid approval";
  }
  if (state.appointmentLetter === "") {
    errors.appointmentLetter = "Enter a valid letter";
  }
  if (state.bioData === "") {
    errors.bioData = "Enter valid bio data";
  }
  if (state.confirmationLetter === "") {
    errors.confirmationLetter = "Enter a valid letter";
  }
  if (state.exitInterview === "") {
    errors.exitInterview = "Enter a valid exit interview";
  }

  return errors;
};

export default findFormErrors;
