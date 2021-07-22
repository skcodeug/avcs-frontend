import { Route, useHistory, Redirect } from "react-router-dom";

const AdminRoute = ({ ...props }) => {
  let history = useHistory();
  if (localStorage.getItem("access-token")) {
    return localStorage.getItem("role").replace(/"/g, "") === "Finance" ? (
      <Route {...props} />
    ) : (
      history.goBack()
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default AdminRoute;
