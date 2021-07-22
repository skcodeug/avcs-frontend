const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.staffId === "") {
    errors.staffId = "Enter a valid ID";
  }
  if (alphaRegex.test(state.fullName)) {
    errors.fullName = "Enter a valid name e.g John Doe";
  }
  if (state.relationship === "") {
    errors.relationship = "Enter a valid relationship e.g Sister";
  }
  if (state.placeOfWork === "") {
    errors.placeOfWork = "Enter a valid place of work e.g Uganda House";
  }
  if (state.residence === "") {
    errors.residence = "Enter a valid residence e.g Muyenga";
  }
  if (state.phoneNumber === "") {
    errors.phoneNumber = "Enter a valid phone number e.g 0781663354";
  }
  return errors;
};

export default findFormErrors;
