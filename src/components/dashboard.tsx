import { Fragment } from "react/jsx-runtime"
import { PrimaryButton } from "./common/primaryButton";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {

    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear();
        debugger
        navigate("/login")
      }
    return (
        <Fragment>
            <h1 className="text-center text-xl font-medium my-5">Welcome to Dashboard</h1>
            <div className="flex justify-center">
            <PrimaryButton text="Logout" onClick={logout} className="primaryBtn" />
            </div>
        </Fragment>
    )
}