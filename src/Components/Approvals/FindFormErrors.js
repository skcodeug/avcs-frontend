const findFormErrors = (state) => {
  const errors = {};
  // const alphaRegex = /^[a-zA-Z\s]+$/

  if (state.date === "") {
    errors.date = "Please provide a date";
  }

  if (state.requisitionReferenceId === "") {
    errors.requisitionReferenceId =
      "Please provide a valid requisition reference ID";
  }

  if (state.approverId === "") {
    errors.approverId = "Please provide an approver ID";
  }

  return errors;
};

export default findFormErrors;
