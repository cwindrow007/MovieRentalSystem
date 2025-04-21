import React, { useState } from 'react'
import { Link } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";

const LoginPage = () => {
    const [emailOrUserName, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault()
        setError('')

        if(!emailOrUserName || !password){
            setError('All Field are Required.')
            return
        }
        setLoading(true)
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form onSubmit={handleLogin} className="bg-white p-7 rounded-lg shadow-md  w-full max-w-sm">
                <h2 className="text-xl font-medium mb-6 text-center">
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

                    <div className="flex-grow justify-between mt-4">
                        <Link to="/userdashboard">
                            <PrimaryButton type="submit" disabled={loading}>
                                {loading ? 'Logging in....' : 'login'}
                            </PrimaryButton>
                        </Link>
                        <Link to="/register">
                            <SecondaryButton type = "submit" disabled={loading}>
                                {loading? '': 'Create Account'}
                            </SecondaryButton>
                        </Link>
                    </div>
                </h2>
            </form>
        </div>
    );
};

export default LoginPage;
