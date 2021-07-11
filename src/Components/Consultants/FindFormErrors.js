const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (alphaRegex.test(state.firstName) === false) {
    errors.firstName = "Please provide a firstname";
  }

  if (alphaRegex.test(state.surname) === false) {
    errors.surname = "Please provide a surname";
  }

  if (alphaRegex.test(state.otherNames) === false) {
    errors.otherNames = "Please provide any other name";
  }

  if (state.consultantCategoryId === "") {
    errors.consultantCategoryId =
      "Please provide a valid consultant category ID";
  }

  return errors;
};

export default findFormErrors;
