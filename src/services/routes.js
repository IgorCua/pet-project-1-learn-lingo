import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectIsLoggedIn } from "../redux/auth/selectors";

export const PrivateRoute = ({component, redirectTo = "/"}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return !isLoggedIn ? component : <Navigate to={redirectTo} />;
}