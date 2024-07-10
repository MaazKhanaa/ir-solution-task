import { Fragment } from "react/jsx-runtime";
import { LoginForm } from "../components/loginForm";
import '../styles/login.css';

export const AuthLayout = () => {
    return (
        <Fragment>
            <div className="grid grid-cols-12 h-full">
                <div className="col-span-12 md:col-span-6 lg:col-span-5 h-full loginFormDev w-full">
                    <div className="bg-white-900 transparentBG mx-auto">
                    <LoginForm />
                    </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-7 w-full h-full loginBg"></div>
            </div>
        </Fragment>
    )
}