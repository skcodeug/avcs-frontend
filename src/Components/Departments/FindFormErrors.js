const findFormErrors = (state) => {
  const errors = {};
  // const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.name === "") {
    errors.name = "Please provide a valid name";
  }

  return errors;
};

export default findFormErrors;
