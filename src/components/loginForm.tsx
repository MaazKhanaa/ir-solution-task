import logoImg from "../assets/images/logo.png";
import { Label } from "./common/label";
import { Input } from "./common/input";
import { PrimaryButton } from "./common/primaryButton";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/form.css"

export const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        keepSignedIn: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
        setError('');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("https://dummyjson.com/auth/login", {
                username: formData.username,
                password: formData.password,
            });
            const result = response.data;
            console.log("Result", result)

            if (result) {
                localStorage.setItem("user", JSON.stringify(result?.username));
                localStorage.setItem("token", JSON.stringify(result?.token));

                navigate('/dashboard')
                setFormData({
                    username: "",
                    password: "",
                    keepSignedIn: false,
                });
            } else {
                setError('Invalid credentials, please try again.');
            }

        } catch (error) {
            console.error("API Error:", error);
            setError('Invalid credentials, please try again.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="mx-5 sm:mx-8 lg:mx-12 my-5">
            <img src={logoImg} alt="logo image" />
            <h1 className="main-heading mb-0">Welcome back</h1>
            <p className="login-paragraph">You need to be signed in to access the project dashboard.</p>

            <form className="mt-8" onSubmit={submitHandler}>
                <div className="formGroup">
                    <Label text="Email or Username" />
                    <Input type="text" value={formData.username} onChange={handleInputChange} placeholder="Enter your email or username" name="username" />
                </div>

                <div className="formGroup relative">
                    <Label text="Password" />
                    <Input type={showPassword ? "text" : "password"} value={formData.password} onChange={handleInputChange} placeholder="Enter your password" name="password" />
                    <span className="absolute right-2 top-10 cursor-pointer" onClick={togglePasswordVisibility}>
                        {!showPassword ? (
                            <AiOutlineEyeInvisible className="h-6 w-6 text-gray-400" />
                        ) : (
                            <AiOutlineEye className="h-6 w-6 text-gray-400" />
                        )}
                    </span>
                </div>
                {error && <h3 className="text-red-500">{error}</h3>}

                <div className="flex justify-between my-5 align-center">
                    <div className="flex items-center space-x-2">
                        <input
                            id="checkbox"
                            type="checkbox"
                            name="keepSignedIn"
                            checked={formData.keepSignedIn}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                        />
                        <label htmlFor="checkbox" className="text-gray-900">Keep me signed in</label>
                    </div>
                    <div>
                        <Link to="/login" className="text-black-500 underline font-medium hover:text-blue-700">Forgot password?</Link>
                    </div>
                </div>

                <div>
                    <PrimaryButton className={`w-full primaryBtn ${loading ? 'opacity-50 pointer-events-none' : ''}`} text={loading ? 'Signing In...' : 'Sign In'} buttonType="submit" /><PrimaryButton className="w-full secondaryBtn mt-4 flex justify-center align-center" buttonType="reset" icon={<FcGoogle />} text="Sign in with Google" />
                </div>
            </form>

            <div className="mt-8">
                <p className="text-center">Haven’t joined yet? <Link to="/login" className="underline font-medium">Sign in</Link></p>
            </div>
        </div>
    )
}