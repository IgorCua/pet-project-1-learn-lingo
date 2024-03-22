import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({component, redirectTo = "/"}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return !isLoggedIn ? component : <Navigate to={redirectTo} />;
}