const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (alphaRegex.test(state.firstName)) {
    errors.firstName = "Enter a valid name";
  }
  if (alphaRegex.test(state.surname)) {
    errors.surname = "Enter a valid name";
  }
  if (alphaRegex.test(state.otherNames)) {
    errors.otherNames = "Enter a valid name";
  }
  if (alphaRegex.test(state.clientCategoryId)) {
    errors.clientCategoryId = "Enter valid ID";
  }

  return errors;
};

export default findFormErrors;
