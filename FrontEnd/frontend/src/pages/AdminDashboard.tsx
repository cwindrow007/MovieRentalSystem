import React, { useState, useEffect } from 'react';

// Define the type for a Movie
type Movie = {
    id: number;
    title: string;
    genre: string;
    rented: boolean;
};
type User = {
    id: number;
    username: string;
    email: string;
    password: string; // Assuming it's a hashed or masked string
    rentedMovieTitle?: string;
};


const MovieList = () => {

    const fakeMovies = [
        {
            id: 1,
            title: "Inception",
            genre: "Thriller",
            rented: true,
        },
        {
            id: 2,
            title: "The Matrix",
            genre: "Sci-Fi",
            rented: false,
        },
        {
            id: 3,
            title: "The Dark Knight",
            genre: "Action",
            rented: false,
        },
    ];

    const fakeUsers: User[] = [
        {
            id: 1,
            username: "johndoe",
            email: "john@example.com",
            password: "hashedpassword123",
            rentedMovieTitle: "Inception"
        },
        {
            id: 2,
            username: "janedoe",
            email: "jane@example.com",
            password: "hashedpassword456",
        }
    ];



  //  const [users, setUsers] = useState([]);
  //  const [movies, setMovies] = useState([]);

    const [movies, setMovies] = useState<Movie[]>([]); 
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
         // Here, we simulate loading data by setting it directly.
       
       setMovies(fakeMovies);
       setUsers(fakeUsers);

    }, []);

    const totalMovies = movies.length;
    const totalUsers = users.length;
    const totalRentedMovies = movies.filter(movie => movie.rented).length;

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
                                    <th className="p-4">Available</th>
                                    <th className="p-4 text-right ">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map((movie) => (
                                    <tr key={movie.id} className="border-t hover:bg-gray-50">
                                        <td className="p-4">{movie.title}</td>
                                        <td className="p-4">{movie.genre}</td>
                                        <td className="p-4">
                                            {movie.rented ? (
                                                <span className="text-red-500">No</span>
                                            ) : (
                                                <span className="text-green-500">Yes</span>
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
                            <div key={user.id} className="bg-white p-4 rounded shadow">
                                <p><strong>Username:</strong> {user.username}</p>
                                <p><strong>Email:</strong> {user.email}</p>
                                {/* Mask password for security even in admin views */}
                                <p><strong>Password:</strong> ••••••••</p>
                                <p>
                                    <strong>Rented Movie:</strong>{' '}
                                    <span className="text-green-600">
                                        {user.rentedMovieTitle || 'None'}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MovieList;






