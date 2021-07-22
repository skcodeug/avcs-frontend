const findFormErrors = (state) => {
  const errors = {};
  const alphaRegex = /^[a-zA-Z\s]+$/;

  if (state.date === "") {
    errors.date = "Enter a valid date";
  }
  if (alphaRegex.test(state.fullName)) {
    errors.fullName = "Enter a valid fullname";
  }
  if (state.presentationSkills === 0) {
    errors.presentationSkills = "Enter a valid score";
  }
  if (state.knowledgeOfPosition === 0) {
    errors.knowledgeOfPosition = "Enter a valid score";
  }
  if (state.backgroundSkills === 0) {
    errors.backgroundSkills = "Enter a valid score";
  }
  if (state.professionalImpression === 0) {
    errors.professionalImpression = "Enter a valid score";
  }
  if (state.interpersonalSkills === 0) {
    errors.interpersonalSkills = "Enter a valid score";
  }
  if (state.organizationFit === 0) {
    errors.organizationFit = "Enter a valid score";
  }
  return errors;
};

export default findFormErrors;
