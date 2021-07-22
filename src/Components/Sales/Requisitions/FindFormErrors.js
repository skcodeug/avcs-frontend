const findFormErrors = (state) => {
  const errors = {};

  if (state.date === "") {
    errors.date = "Please provide a valid date";
  }
  if (state.details === "") {
    errors.details = "Please provide valid details";
  }
  if (state.amount === 0) {
    errors.amount = "Please provide a valid amount";
  }
  if (state.requisitionerId === "") {
    errors.requisitionerId = "Please provide a valid ID";
  }

  return errors;
};

export default findFormErrors;
