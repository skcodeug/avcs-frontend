const findFormErrors = (state) => {
  const errors = {};

  if (state.clientId === "") {
    errors.clientId = "Enter a valid ID";
  }
  if (state.contratReferenceId === "") {
    errors.contratReferenceId = "Enter a valid ID";
  }
  if (state.consultantId === "") {
    errors.consultantId = "Enter a valid ID";
  }
  if (state.startDate === "") {
    errors.startDate = "Enter a valid date";
  }
  if (state.endDate === "") {
    errors.endDate = "Enter a valid date";
  }
  if (state.projectStatusId === "") {
    errors.projectStatusId = "Enter a valid ID";
  }
  return errors;
};

export default findFormErrors;
