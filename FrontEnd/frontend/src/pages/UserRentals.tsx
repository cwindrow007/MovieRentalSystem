import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/PrimaryButton.tsx';
import SecondaryButton from '../components/SecondaryButton.tsx';
import AuthService from '../services/AuthServices.ts';
import { useAuth } from '../contexts/AuthContext.tsx';

const CheckoutPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expirationDate, setExpirationDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login: setAuthToken } = useAuth();

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!cardNumber || !expirationDate || !cvv) {
            setError('All fields are required.');
            return;
        }

        setLoading(true);

        try {
            const response = await AuthService.checkout({
                cardNumber,
                expirationDate,
                cvv,
            });

            setAuthToken(response.token);
            navigate('/confirmation');

        } catch (err: any) {
            if (err.message === 'Checkout failed.') {
                setError('Invalid payment information.');
            } else {
                setError('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <form onSubmit={handleCheckout} className="bg-white p-7 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-medium mb-6 text-center mt-4">Movie Rental Checkout</h2>
                <div className="grid grid-cols-2 gap-4">
                    {/* Left side: Payment Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
                        <input
                            type="text"
                            placeholder="Card Number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            className="w-full mb-3 p-2 border-2 border-gray-500 rounded-md italic"
                        />
                        <input
                            type="text"
                            placeholder="Expiration Date"
                            value={expirationDate}
                            onChange={(e) => setExpirationDate(e.target.value)}
                            className="w-full mb-3 p-2 border-2 border-gray-500 rounded-md italic"
                        />
                        <input
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-full mb-3 p-2 border-2 border-gray-500 rounded-md italic"
                        />
                        {error && (
                            <div className="text-red-500 text-sm mb-4 italic">{error}</div>
                        )}
                        <div className="flex gap-4 mt-6">
                            <SecondaryButton type="button" disabled={loading} className="w-full bg-red-500 text-white" onClick={() => navigate('/cancel')}>
                                {loading ? '' : 'Cancel'}
                            </SecondaryButton>
                            <PrimaryButton type="submit" disabled={loading} className="w-full bg-green-500 text-white">
                                {loading ? 'Processing...' : 'Accept'}
                            </PrimaryButton>
                        </div>
                    </div>

                    {/* Right side: Rented Movies */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Movies Rented</h3>
                        <div className="border p-4 rounded-md bg-gray-50">
                            <p>Movie Title 1 - $5.00</p>
                            <p>Movie Title 2 - $7.50</p>
                            <hr className="my-2" />
                            <p className="font-semibold">Total: $12.50</p>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CheckoutPage;
