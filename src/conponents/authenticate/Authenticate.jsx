import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
    selectToken, 
    selectUserID, 
    selectIsLoggedIn, 
    selectAuthError 
} from "../../redux/auth/selectors";
import { notiflixError } from "../../services/notiflixError";
import { logOut } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

export const Authenticate = ({children}) => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const userID = useSelector(selectUserID);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const authError = useSelector(selectAuthError);
    const navigate = useNavigate();
    
    const expTime = useMemo(()=>{
        if (token === null) return;
        const decode = JSON.parse(atob(token.split('.')[1]));
        return decode.exp * 1000;
    }, [token]);

    useEffect(()=>{
        if (isLoggedIn && new Date().getTime() > expTime) {
            navigate('/', {replace: true});
            dispatch(logOut(userID));
            notiflixError('info', "Your session expired, please log in.");
        }
        return;
    }, [expTime, userID, isLoggedIn, authError, navigate, dispatch]);

    return <>{children}</>
}
