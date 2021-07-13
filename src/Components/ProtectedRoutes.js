import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ ...props }) => {
  return localStorage.getItem("access-token") ? (
    <Route {...props} />
  ) : (
    <Redirect to="/" />
  );
};

export default ProtectedRoute;
