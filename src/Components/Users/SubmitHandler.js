import axios from "axios";
import findFormErrors from "./ValidateUsers";

export default submitHandler = (event) => {
  event.preventDefault();

  if (Object.keys(findFormErrors()).length === 0) {
    event.target.className += " was-validated";

    let temp = { ...this.state, roles: [] };
    temp.roles[0] = this.state.ballz;
    delete temp.ballz;
    delete temp.users;
    delete temp.maritals;
    delete temp.groups;
    delete temp.errors;
    console.log(temp);

    axios
      .post("https://avcs-platform.herokuapp.com/users", temp, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(() => {
        this.setState(() => ({
          prefix: "",
          first_name: "",
          surname: "",
          other_names: "",
          department_id: "",
          roles: "",
          password: "",
          departments: [],
          // ballz: "",
          // users: [],
          // maritals: [],
          // groups: [],
          errors: {},
        }));
        event.target.className = "needs-validation";
      })
      .catch((error) => console.log(error));
  } else {
    let errors = findFormErrors();
    this.setState((prevState) => {
      return {
        ...prevState,
        errors: errors,
      };
    });
  }
};
