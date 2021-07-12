const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Please provide a valid date";
  }
  if (state.clientId === "") {
    errors.clientId = "Please provide a valid ID";
  }

  return errors;
};

export default findFormErrors;
