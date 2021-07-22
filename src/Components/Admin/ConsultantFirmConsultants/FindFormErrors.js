const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.consultantId === "") {
    errors.consultantId = "Enter a valid ID";
  }
  if (alphaRegex.test(state.firstName)) {
    errors.firstName = "Enter a valid name";
  }
  if (alphaRegex.test(state.surname)) {
    errors.surname = "Enter a valid name";
  }
  if (alphaRegex.test(state.otherNames)) {
    errors.otherNames = "Enter a valid name";
  }
  if (state.dob === "") {
    errors.dob = "Enter a valid date";
  }
  if (state.gender === "") {
    errors.gender = "Enter gender";
  }
  if (state.maritalStatusId === "") {
    errors.maritalStatusId = "Select a marital status";
  }
  if (state.nationalIdNumber === "") {
    errors.nationalIdNumber = "Enter a valid NIN";
  }
  if (state.email === "") {
    errors.email = "Enter a email";
  }
  if (state.phoneNumber === "") {
    errors.phoneNumber = "Enter a valid phone number";
  }
  if (state.consultancyRate === "") {
    errors.consultancyRate = "Enter a valid rate";
  }

  return errors;
};

export default findFormErrors;
