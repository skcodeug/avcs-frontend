const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (alphaRegex.test(state.name)) {
    errors.name = "Please provide a valid status";
  }

  return errors;
};

export default findFormErrors;
