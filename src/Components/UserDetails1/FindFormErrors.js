const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.staffId === "") {
    errors.staffId = "Enter a valid ID";
  }
  if (state.phoneNumbers === "") {
    errors.phoneNumbers = "Enter valid phone numbers e.g 0781232877";
  }
  if (state.personalEmail === "") {
    errors.personalEmail = "Enter a valid email e.g abc@gmail.com";
  }
  if (state.gender === "") {
    errors.gender = "Select a gender";
  }
  if (state.maritalStatusId === "") {
    errors.maritalStatusId = "Enter a valid ID";
  }
  if (state.dateOfJoining === "") {
    errors.dateOfJoining = "Enter a valid date";
  }
  if (state.idNo === "") {
    errors.idNo = "Enter a valid ID";
  }
  if (state.dob === "") {
    errors.dob = "Enter a valid date";
  }
  if (state.nssfNo === "") {
    errors.nssfNo = "Enter valid NSSF number";
  }
  if (state.tinNo === "") {
    errors.tinNo = "Enter a valid TIN number";
  }
  if (state.acknowledgement === "") {
    errors.acknowledgement = "Enter a valid acknowledgement";
  }

  return errors;
};

export default findFormErrors;
