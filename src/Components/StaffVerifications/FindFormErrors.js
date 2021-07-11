const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Enter a valid date";
  }
  if (state.clientId === "") {
    errors.clientId = "Enter a valid ID";
  }
  if (state.paid === "") {
    errors.paid = "Enter a valid amount e.g 45000";
  }
  if (state.balance === "") {
    errors.balance = "Enter a valid amount e.g 15000";
  }
  if (state.paidInWords === "") {
    errors.paidInWords = "Enter a valid amount e.g Forty five thousand";
  }
  return errors;
};

export default findFormErrors;
