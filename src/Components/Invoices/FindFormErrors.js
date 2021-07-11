const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Enter a valid date";
  }
  if (state.contractReferenceId === "") {
    errors.contractReferenceId = "Enter a valid ID";
  }
  if (state.clientId === "") {
    errors.clientId = "Enter a valid ID";
  }
  return errors;
};

export default findFormErrors;
