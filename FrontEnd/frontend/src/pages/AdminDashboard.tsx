
import React, { useState, useEffect } from 'react';

const MovieList = () => {
    const [users, setUsers] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        {/* replace parameter below with actual users endpoint */ }
        fetch("users") 
            .then(res => res.json())
            .then(data => setUsers(data));
        {/* replace parameter below with actual movies endpoint */ }
        fetch("movies BE server path") 
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    const totalMovies = movies.length;
    const totalUsers = users.length;
    const totalRentedMovies = movies.filter(movie => movie.rented === true).length;


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-4 max-w-4xl w-full">


                {/*Overview*/}
                <div className="mb-6 p-4 border rounded bg-gray-50">
                    <h2 className="text-xl font-semibold mb-4">Overview</h2>
                    <div className="flex space-x-6">
                        <div><strong>Total Movies:</strong> {totalMovies}</div>
                        <div><strong>Total Users:</strong> {totalUsers}</div>
                        <div><strong>Total Rented Movies:</strong> {totalRentedMovies}</div>
                    </div>
                </div>

                {/*User Info*/}
                <h2 className="text-xl font-semibold mb-4">User Information</h2>
                {users.map(user => (
                    <div key={user.id} className="mb-6 p-4 border rounded bg-gray-50">
                       <div className="space-y-2">
                            <div><strong>Username:</strong> {user.username}</div>
                            <div><strong>Email:</strong> {user.email}</div>
                            <div><strong>Password:</strong> {user.password}</div>
                            <div>
                                <strong>Rented Movie:</strong>
                                <span className="ml-1 text-green-600">placeholder</span>
                            </div>
                       </div>
                    </div>
                ))}

                {/*Movie List*/}
                <h2 className="text-xl font-semibold mb-4">Movie List</h2>
                {movies.map(movie => (
                    <div key={movie.id} className="flex justify-between items-center p-4 border-b">
                        <span>{movie.title}</span>
                        <div>
                            <button className="text-blue-500">Edit</button>
                            <button className="text-red-500 ml-2">Delete</button>
                        </div>
                    </div>
                ))}

                {/*Add New Movie btn below list of movies*/}
                <div className="mt-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded">Add New Movie</button>
                </div >
            </div >
        </div>
    );
};




