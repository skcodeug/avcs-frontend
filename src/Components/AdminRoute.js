import { Route, useHistory, Redirect } from "react-router-dom";
import Users from "./Users/Users";

const AdminRoute = () => {
  let history = useHistory();
  if (localStorage.getItem("access-token")) {
    return localStorage.getItem("role").replace(/"/g, "") === "Admin" ? (
      <Route
        render={(props) => (
          <Users {...props} role={localStorage.getItem("role")} />
        )}
      />
    ) : (
      history.goBack()
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default AdminRoute;
