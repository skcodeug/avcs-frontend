const findFormErrors = (state) => {
  const errors = {};

  if (state.staffId === "") {
    errors.staffId = "Enter a valid ID";
  }
  if (state.fullName === "") {
    errors.fullName = "Enter valid fullname e.g John Doe";
  }
  if (state.relationship === "") {
    errors.relationship = "Enter a valid relationship e.g Sister";
  }
  if (state.dob === "") {
    errors.dob = "Select a date";
  }
  if (state.phoneNumber === "") {
    errors.phoneNumber = "Enter a valid number e.g 0700223645";
  }

  return errors;
};

export default findFormErrors;
