import { Navigate } from "react-router-dom";
import { accountService } from "@/_services/account.service";

const AuthGuard = ({ children }) => {
    if (!accountService.isLogged()) {
        return <Navigate to="/home" />
    }
    return children
};

export default AuthGuard;