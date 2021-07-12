const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.quotationReferenceId === "") {
    errors.quotationReferenceId = "Please provide a valid ID";
  }
  if (state.position === "") {
    errors.position = "Please provide a valid position";
  }
  if (state.detail === "") {
    errors.detail = "Please provide a valid detail";
  }
  if (state.unitRate === "") {
    errors.unitRate = "Please provide a valid rate";
  }
  if (state.quantity === "") {
    errors.quantity = "Please provide a valid quantity";
  }

  return errors;
};

export default findFormErrors;
