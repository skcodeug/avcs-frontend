import { Route, useHistory, Redirect } from "react-router-dom";
import Users from "./Users/Users";

const HrRoute = () => {
  let history = useHistory();
  if (localStorage.getItem("access-token")) {
    return localStorage.getItem("role").replace(/"/g, "") === "Admin" ||
      localStorage.getItem("role").replace(/"/g, "") === "HR" ? (
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

export default HrRoute;
