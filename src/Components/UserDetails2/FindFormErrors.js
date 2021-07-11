const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.staffId === "") {
    errors.staffId = "Enter a valid ID";
  }
  if (state.bank === "") {
    errors.bank = "Enter a valid bank name e.g DFCU";
  }
  if (state.branch === "") {
    errors.branch = "Enter a valid branch name e.g Wandegeya";
  }
  if (state.accountNumber === "") {
    errors.accountNumber = "Enter a valid account number";
  }
  if (state.village === "") {
    errors.village = "Enter a valid village name";
  }
  if (state.currentAddress === "") {
    errors.currentAddress = "Enter a valid address";
  }
  if (state.permanentAddress === "") {
    errors.permanentAddress = "Enter a valid address";
  }
  if (state.fatherNames === "") {
    errors.fatherNames = "Enter a valid number e.g John Doe";
  }
  if (state.motherNames === "") {
    errors.motherNames = "Enter a valid number e.g Jane Doe";
  }

  return errors;
};

export default findFormErrors;
