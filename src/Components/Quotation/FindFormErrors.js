const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Enter a valid date";
  }
  if (state.clientId === "") {
    errors.clientId = "Enter a valid ID";
  }
  if (state.prospectReferenceId === "") {
    errors.prospectReferenceId = "Enter a valid ID";
  }
  return errors;
};

export default findFormErrors;
