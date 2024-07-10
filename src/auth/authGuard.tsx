import { Navigate, Outlet } from "react-router-dom"

const AuthGuard = () => {
    const auth = localStorage.getItem('user')
    return auth ? <Outlet /> : <Navigate to='/login' />
}

export default AuthGuard;