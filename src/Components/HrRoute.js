import { Route, useHistory, Redirect } from "react-router-dom";

const HrRoute = ({ component: Component, ...props }) => {
  let history = useHistory();
  if (localStorage.getItem("access-token")) {
    return localStorage.getItem("role").replace(/"/g, "") === "Admin" ||
      localStorage.getItem("role").replace(/"/g, "") === "HR" ? (
      <Route
        {...props}
        render={() => <Component role={localStorage.getItem("role")} />}
      />
    ) : (
      history.goBack()
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default HrRoute;
