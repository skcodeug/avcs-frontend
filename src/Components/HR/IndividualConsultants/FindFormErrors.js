const findFormErrors = (state) => {
  const errors = {};
  // const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.consultantId === "") {
    errors.consultantId = "Please provide a valid consultant ID";
  }
  if (state.dob === "") {
    errors.dob = "Please provide a valid date";
  }
  if (state.gender === "") {
    errors.gender = "Please select a gender";
  }
  if (state.maritalStatusId === "") {
    errors.maritalStatusId = "Please select a marital status";
  }
  if (state.nationalIdNumber === "") {
    errors.nationalIdNumber = "Please provide valid NIN";
  }
  if (state.email === "") {
    errors.email = "Please provide a valid email";
  }
  if (state.phoneNumber === "") {
    errors.phoneNumber = "Please provide valid phone number";
  }
  if (state.address === "") {
    errors.address = "Please provide a valid address";
  }
  if (state.consultancyRate === "") {
    errors.consultancyRate = "Please provide a valid rate";
  }
  if (state.photo === "") {
    errors.photo = "Please provide a valid photo";
  }
  if (state.cv === "") {
    errors.cv = "Please provide a valid CV";
  }
  if (state.academicDocuments === "") {
    errors.academicDocuments = "Please provide a valid document";
  }

  return errors;
};

export default findFormErrors;
