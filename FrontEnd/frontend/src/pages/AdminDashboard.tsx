import React, { useState, useEffect } from 'react';
import movieData from '../movies.json';

 // In substitution of database
type User = {
    id: number;
    username: string;
    email: string;
    password: string; 
    rentedMovies?: string[];
    role: string;
    status: boolean;
    lastActive?: Date;
};

const MovieList = () => {

    /* Code below for gathering data from database instead of placeholder data

    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => { 

    replace parameter below with actual users endpoint 
    
    fetch("users")  
    
    .then(res => res.json()) 
    
    .then(data => setUsers(data)); 
    
    replace parameter below with actual movies endpoint 
    
    fetch("movies BE server path")  
    
    .then(res => res.json()) 
    
    .then(data => setMovies(data)); 
    
    }, []); */


    {/*Start of UI implementation using placeholder data*/}

    // In substitution of database
    const fakeUsers: User[] = [
        {
            id: 1,
            username: "johndoe",
            email: "john@example.com",
            password: "examplepassword123",
            rentedMovies: ["Inception", "The Matrix"],
            role: "User",
            status: false,
            lastActive: new Date("2024-12-01T10:30:00Z")
        },
        {
            id: 2,
            username: "janedoe",
            email: "jane@example.com",
            password: "examplepassword456",
            role: "Admin",
            status: true,
            lastActive: new Date("2025-05-02T10:30:00Z")

        }
    ];

    const [users, setUsers] = useState<User[]>([]);
    const [movies, setMovies] = useState<Movie[]>([]);
    
    useEffect(() => {
        setMovies(movieData);
        setUsers(fakeUsers); 
    }, []);

    const handleManageUser = (userId: number) => {
        console.log(`Managing user with ID: ${userId}`);     
    };

    // For focused scrolling in movie list
    const [isScrollable, setIsScrollable] = useState(false);

    //Combines data from users and movies
    const transactions = users.flatMap(user =>
        (user.rentedMovies || []).map(title => {
            const movie = movies.find(m => m.title === title);
            return {
                user: user.username,
                title,
                price: movie?.price ?? null,
                id: `${user.id}-${title}`,
            };
        })
    );

    const totalMovies = movies.length;
    const totalUsers = users.length;
    const totalRentedMovies = movies.filter(movie => movie.rented).length;

    // Max entries per page
    const [userPage, setUserPage] = useState(1);
    const usersPerPage = 4;
    const [transactionPage, setTransactionPage] = useState(1);
    const transactionsPerPage = 10;

    // For pagination
    const totalUserPages = Math.ceil(users.length / usersPerPage);
    const paginatedUsers = users.slice(
        (userPage - 1) * usersPerPage,
        userPage * usersPerPage
    );
    // For pagination
    const totalTransactionPages = Math.ceil(transactions.length / transactionsPerPage);
    const paginatedTransactions = transactions.slice(
        (transactionPage - 1) * transactionsPerPage,
        transactionPage * transactionsPerPage
    );

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-6xl mx-auto space-y-8">
                <header className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                </header>
                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded shadow text-center">
                            <p className="text-gray-600">Total Movies</p>
                            <p className="text-xl font-bold">{totalMovies}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow text-center">
                            <p className="text-gray-600">Total Users</p>
                            <p className="text-xl font-bold">{totalUsers}</p>
                        </div>
                        <div className="bg-white p-4 rounded shadow text-center">
                            <p className="text-gray-600">Rented Movies</p>
                            <p className="text-xl font-bold">{totalRentedMovies}</p>
                        </div>
                    </div>
                </section>
                {/* Movie List */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Movies</h2>
                    </div>
                    <div id="Movie-box" className={`overflow-x-auto bg-white shadow rounded max-h-96 ${isScrollable ? 'overflow-auto' : 'overflow-hidden'}`}
                        onFocus={() => setIsScrollable(true)}  
                        onBlur={() => setIsScrollable(false)}    
                        tabIndex={0}>
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50 sticky top-0 z-10">
                                <tr>
                                    <th className="p-4 text-left w-[200px]">Title</th>
                                    <th className="p-4 text-center w-[120px]">Genre</th>
                                    <th className="p-4 text-center w-[120px]">Price</th>
                                    <th className="p-4 text-center w-[120px]">Available</th>
                                    <th className="p-4 text-right w-[200px]">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id} className="border-t hover:bg-gray-50">
                                        <td className="p-4 text-left  w-[200px]">{movie.title}</td>
                                        <td className="p-4 text-center w-[120px]">{movie.genre}</td>
                                        <td className="p-4 text-center w-[120px]">${movie.price}</td>
                                        <td className="p-4 text-center w-[120px]">
                                            {movie.available ? (
                                                <span className="text-green-500">Yes</span>
                                            ) : (
                                                <span className="text-red-500">No</span>
                                            )}
                                        </td>
                                        <td className="p-4 text-right w-[200px]">
                                            <button className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
                                                Edit
                                            </button>
                                            <button className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md ml-2">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> 
                    {/* New Movie Btn */}
                    <div className="flex justify-end mt-4 pr-4">
                        <button className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
                            Add New Movie
                        </button>
                    </div>
                </section>
                {/* User Management */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Users</h2>
                    <div className="bg-white p-4 rounded shadow space-y-6">
                        {paginatedUsers.map(user => (
                            <div key={user.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
                                <div>
                                    <p><strong>Username:</strong> {user.username}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Password:</strong> {user.password}</p>
                                    <p>
                                        <strong>Rented Movies:</strong>{' '}
                                        {user.rentedMovies && user.rentedMovies.length > 0 ? (
                                            <span className="text-green-500">
                                                {user.rentedMovies.join(', ')}
                                            </span>
                                        ) : (
                                            <span className="text-gray-500">None</span>
                                        )}
                                    </p>
                                    <p><strong>Role:</strong> {user.role}</p>
                                    <p>
                                        <strong>Status:</strong>{' '}
                                        {user.status ? (
                                            <span className="text-green-500">Active</span>
                                        ) : (
                                            <span className="text-red-500">Inactive</span>
                                        )}
                                    </p>
                                    <p>
                                        <strong>Last Active:</strong>{' '}
                                        {user.lastActive ? user.lastActive.toLocaleString() : "N/A"}
                                    </p>
                                </div>
                                <div>
                                    <button className="text-white bg-indigo-400 hover:bg-indigo-500 focus:ring-4 focus:ring-indigo-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md"
                                        onClick={() => handleManageUser(user.id)}>
                                        Manage
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/*For pagination*/}
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <button
                            onClick={() => setUserPage(p => Math.max(p - 1, 1))}
                            disabled={userPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {userPage} of {totalUserPages}</span>
                        <button
                            onClick={() => setUserPage(p => Math.min(p + 1, totalUserPages))}
                            disabled={userPage === totalUserPages}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>   
                </section>
                 {/* Transactions */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold">Transactions</h2>
                    </div>
                    <div className="overflow-x-auto bg-white shadow rounded">
                        <table className="min-w-full table-fixed text-sm text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4 text-left">User</th>
                                    <th className="p-4 text-center">Movie Title</th>
                                    <th className="p-4 text-center">Price</th>
                                    <th className="p-4 text-center">Date</th>
                                    <th className="p-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedTransactions.map(transaction => (
                                    <tr key={transaction.id} className="border-t hover:bg-gray-50">
                                        <td className="p-4 text-left">{transaction.user}</td>
                                        <td className="p-4 text-center">{transaction.title}</td>
                                        <td className="p-4 text-center">
                                            {transaction.price !== null ? `$${transaction.price.toFixed(2)}` : 'N/A'}
                                        </td>
                                        <td className="p-4 text-center">{"Date from transaction table"} </td>
                                        <td className="p-4 text-right">
                                            <button className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
                                                View
                                            </button>
                                            <button className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md ml-2">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-4 pr-4">
                        <button className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
                            Add New Transaction
                        </button>
                    </div>
                    {/*For pagination*/}
                    <div className="flex justify-center items-center gap-4 p-4">
                        <button
                            onClick={() => setTransactionPage(p => Math.max(p - 1, 1))}
                            disabled={transactionPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                            Previous
                        </button>
                        <span>Page {transactionPage} of {totalTransactionPages}</span>
                        <button
                            onClick={() => setTransactionPage(p => Math.min(p + 1, totalTransactionPages))}
                            disabled={transactionPage === totalTransactionPages}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );  
};

export default MovieList;





