const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Enter a valid date";
  }
  if (state.consultantId === "") {
    errors.consultantId = "Enter a valid ID";
  }
  if (state.contractReferenceId === "") {
    errors.contractReferenceId = "Enter a valid ID";
  }
  if (state.paid === "") {
    errors.paid = "Enter a valid amount e.g 50000";
  }
  return errors;
};

export default findFormErrors;
