import React, { useState, useEffect } from 'react';

 // In substitution of database
type Movie = {
    id: number;
    title: string;
    genre: string;
    rented: boolean;
    available: boolean;
    price: number;
};
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
    const fakeMovies = [
        {
            id: 1,
            title: "Inception",
            genre: "Thriller",
            rented: true,
            available: true,
            price: 9.99
        },
        {
            id: 2,
            title: "The Matrix",
            genre: "Sci-Fi",
            rented: true,
            available: true,
            price: 9.99
        },
        {
            id: 3,
            title: "The Dark Knight",
            genre: "Action",
            rented: false,
            available: true,
            price: 9.99
        },
    ];

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
    
    const [movies, setMovies] = useState<Movie[]>([]); 
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {  
       setMovies(fakeMovies);
       setUsers(fakeUsers);
    }, []);

    const totalMovies = movies.length;
    const totalUsers = users.length;
    const totalRentedMovies = movies.filter(movie => movie.rented).length;
    const handleManageUser = (userId: number) => {
        console.log(`Managing user with ID: ${userId}`);     
    };

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
                    <div className="overflow-x-auto bg-white shadow rounded">
                        <table className="min-w-full text-sm text-left">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="p-4">Title</th>
                                    <th className="p-4">Genre</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Available</th>
                                    <th className="p-4 text-right ">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id} className="border-t hover:bg-gray-50">
                                        <td className="p-4">{movie.title}</td>
                                        <td className="p-4">{movie.genre}</td>
                                        <td className="p-4">${movie.price}</td>
                                        <td className="p-4">
                                            {movie.available ? (
                                                <span className="text-green-500">Yes</span>
                                            ) : (
                                                <span className="text-red-500">No</span>
                                            )}
                                        </td>
                                        <td className="flex justify-end items-center p-4">
                                                <button className="text-white bg-blue-400 hover:bg-blue-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">Edit</button>
                                                <button className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md ml-2">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-end mt-4 pr-4">
                        <button className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md">
                            Add New Movie
                        </button>
                    </div>
                </section>

                {/* User Management */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Users</h2>
                    <div className="space-y-4">
                        {users.map(user => (
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
                                            onClick={() => handleManageUser(user.id)}
                                    >Manage</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MovieList;





