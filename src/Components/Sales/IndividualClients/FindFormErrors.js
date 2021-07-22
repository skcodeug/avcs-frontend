const findFormErrors = (state) => {
  const errors = {};
  // const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.clientId === "") {
    errors.clientId = "Please provide a valid client ID";
  }
  if (state.tinNo === "") {
    errors.tinNo = "Please provide a valid TIN number";
  }
  if (state.contactsNames === "") {
    errors.contactsNames = "Please provide a valid names";
  }
  if (state.email === "") {
    errors.email = "Please provide a valid email";
  }
  if (state.phoneNumbers === "") {
    errors.phoneNumbers = "Please provide valid phone numbers";
  }
  if (state.address === "") {
    errors.address = "Please provide a valid address";
  }
  if (state.city === "") {
    errors.city = "Please provide valid city";
  }
  if (state.avcsDiscovery === "") {
    errors.avcsDiscovery = "Please provide a valid discovery";
  }

  return errors;
};

export default findFormErrors;
