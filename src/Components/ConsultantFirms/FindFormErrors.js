const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.consultantId === "") {
    errors.consultantId = "Enter a valid ID";
  }
  if (state.tinNo === "") {
    errors.tinNo = "Enter a valid TIN";
  }
  if (state.registrationDate === "") {
    errors.registrationDate = "Enter a valid date";
  }
  if (state.memarts === "") {
    errors.memarts = "Enter valid memarts";
  }
  if (state.certificateOfIncorporation === "") {
    errors.certificateOfIncorporation = "Enter a valid certificate";
  }
  if (state.tradingLicenseCertificate === "") {
    errors.tradingLicenseCertificate = "Enter a valid certificate";
  }
  if (state.tinCertificate === "") {
    errors.tinCertificate = "Enter a valid certificate";
  }
  if (state.form18OfficeLocation === "") {
    errors.form18OfficeLocation = "Enter a valid location";
  }
  if (state.form20DirectorsParticulars === "") {
    errors.form20DirectorsParticulars = "Enter a valid location";
  }

  return errors;
};

export default findFormErrors;
