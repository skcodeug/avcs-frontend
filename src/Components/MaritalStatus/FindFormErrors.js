const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (alphaRegex.test(state.name)) {
    errors.name = "Please provide a valid name";
  }

  return errors;
};

export default findFormErrors;
