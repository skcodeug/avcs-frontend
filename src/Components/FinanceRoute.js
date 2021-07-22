import { Route, useHistory, Redirect } from "react-router-dom";

const FinanceRoute = ({ ...props }) => {
  let history = useHistory();
  if (localStorage.getItem("access-token")) {
    return localStorage.getItem("role").replace(/"/g, "") === "Admin" ||
      localStorage.getItem("role").replace(/"/g, "") === "Finance" ? (
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

export default FinanceRoute;
