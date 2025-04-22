import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";

const LoginPage = () => {
    const [emailOrUserName, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if(!emailOrUserName || !password){
            setError('All Field are Required.')
            return
        }
        setLoading(true)
        // Simulate fake API call
        setTimeout(() => {
            // TODO: Replace with axios POST when backend is ready
            const mockSuccess = true

            if (mockSuccess) {
                localStorage.setItem('jwt', 'mock-token-123') // Temporary
                navigate('/home') // Redirect to catalog
            } else {
                setError('Invalid credentials.')
            }

            setLoading(false)
        }, 1000)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form onSubmit={handleLogin} className="bg-white p-7 rounded-lg shadow-md  w-full max-w-sm">
                <h2 className="text-2xl font-medium mb-6 text-center mt-4"> Movie Rental System</h2>
                <div className="text-2xl font-medium mb-6 text-center">
                    <input
                        type = "text"
                        placeholder="Email or Username"
                        value = {emailOrUserName}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        className="w-full mb-4 p-2 border-2 border-gray-500 rounded-md italic"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mb-4 p-2 border-2 border-gray-500 rounded-md italic"
                        />
                    <div className="text-left text-sm text-gray-500 italic underline mb-4">
                        <Link to='/forgot-password'>Forgot Password?</Link>
                    </div>

                    <div className="flex flex-col justify-between gap-4 mt-6">
                        <Link to="/user-dashboard" className="flex-1">
                            <PrimaryButton type="submit" disabled={loading} className="w-full">
                                {loading ? 'Logging in....' : 'Login'}
                            </PrimaryButton>
                        </Link>
                        <Link to="/register" className="flex-1">
                            <SecondaryButton type = "submit" disabled={loading} className="w-full">
                                {loading? '': 'Create Account'}
                            </SecondaryButton>
                        </Link>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
