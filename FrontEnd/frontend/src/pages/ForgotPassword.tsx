import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Hook into backend
        setMessage("If an account exists, reset instructions will be sent.");
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Reset Your Password</h2>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-2 border rounded"
                />

                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded hover:bg-white hover:text-black border border-gray-800 transition"
                >
                    Send Reset Link
                </button>

                {message && <p className="text-green-600 mt-4 text-sm text-center">{message}</p>}

                <button
                    onClick={() => navigate("/")}
                    className="w-full bg-blue-600 text-white py-2 rounded mt-4 hover:bg-blue-700 transition"
                >
                    Back to Login
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
