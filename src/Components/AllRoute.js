import { Route, useHistory, Redirect } from "react-router-dom";

const AllRoute = ({ component: Component, ...props }) => {
  let history = useHistory();
  if (localStorage.getItem("access-token")) {
    return localStorage.getItem("role").replace(/"/g, "") === "Admin" ||
      localStorage.getItem("role").replace(/"/g, "") === "HR" ||
      localStorage.getItem("role").replace(/"/g, "") === "Finance" ||
      localStorage.getItem("role").replace(/"/g, "") === "Sales" ? (
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

export default AllRoute;
