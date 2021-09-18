const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (alphaRegex.test(state.firstName) === false) {
    errors.firstName = "Enter a valid name";
  }
  if (alphaRegex.test(state.surname) === false) {
    errors.surname = "Enter a valid name";
  }
  if (alphaRegex.test(state.otherNames) === false) {
    errors.otherNames = "Enter a valid name";
  }
  if (state.clientCategoryId === "") {
    errors.clientCategoryId = "Enter valid ID";
  }

  return errors;
};

export default findFormErrors;
