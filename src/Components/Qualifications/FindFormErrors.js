const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.staffId === "") {
    errors.staffId = "Enter a valid ID";
  }
  if (state.year === "") {
    errors.year = "Enter a valid year e.g 2021";
  }
  if (state.name === "") {
    errors.name = "Enter a valid name e.g Masters in Business Administration";
  }
  if (state.institution === "") {
    errors.institution = "Enter a valid institution e.g Makerere University";
  }
  return errors;
};

export default findFormErrors;
