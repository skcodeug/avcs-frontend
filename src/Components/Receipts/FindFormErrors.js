const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Enter a valid date";
  }
  if (state.clientId === "") {
    errors.clientId = "Enter a valid ID";
  }
  if (state.invoiceReferenceId === "") {
    errors.invoiceReferenceId = "Enter a valid ID";
  }
  if (state.amountPaid === "") {
    errors.amountPaid = "Enter a valid amount e.g 45000";
  }
  if (alphaRegex.test(state.amountInWords)) {
    errors.amountInWords = "Enter a valid amount e.g Forty five thousand";
  }
  return errors;
};

export default findFormErrors;
