const findFormErrors = (state) => {
  const errors = {};
  // const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Please provide a valid date";
  }
  if (state.quotationReferenceId === "") {
    errors.quotationReferenceId = "Please provide a valid ID";
  }
  if (state.clientId === "") {
    errors.clientId = "Please provide a valid ID";
  }
  if (state.prospectDetailsId === "") {
    errors.prospectDetailsId = "Please provide a valid ID";
  }
  if (state.startDate === "") {
    errors.startDate = "Please provide valid start date";
  }
  if (state.endDate === "") {
    errors.endDate = "Please provide a valid end date";
  }

  return errors;
};

export default findFormErrors;
