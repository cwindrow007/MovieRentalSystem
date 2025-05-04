import { useParams } from 'react-router-dom';
import moviesData from '../movies.json';
import banner from '../components/moutain.jpg';
import {Link } from 'react-router-dom';

const MovieDetails = () => {

    const { title } = useParams<{ title: string }>();
    const decodedTitle = decodeURIComponent(title || '').trim();
    const movie = moviesData.find((m) =>
        m.title.trim().toLowerCase() === decodedTitle.toLowerCase()

    );
    if (!movie || !movie.title || !movie.description) {
        return <div className="text-white p-4">Movie data is incomplete or not found.</div>;
    }




    if (!movie) {
        return <div className="text-white p-4">Movie not found.</div>;
    }

    return (
        <div className="bg-gray-700 p-4 min-h-screen">
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <h1 className="text-white text-2xl">Movie Rental System</h1>
                <div className="flex space-x-4">
                    <Link to="/home" className="text-white">Home</Link>
                    <Link to="/user-rentals" className="text-white">My Rentals</Link>
                    <input type="text" placeholder="Search..." className="p-2 rounded" />
                    <div className="text-white">Profile</div>
                    <div className="text-white">Cart</div>
                    <div className="text-white">Settings</div>
                </div>
            </nav>
            <div className="flex flex-col md:flex-row mt-8">
                <div className="md:w-2/3 p-4">
                    <h1 className="text-4xl text-white font-bold">{movie.title}</h1>
                    <p className="text-white mt-2">{movie.genre} | {new Date().getFullYear()}</p>
                    <p className="text-white mt-4">{movie.description}</p>
                    <div className="flex mt-4">
                        <div className="mr-8">
                            <h2 className="text-white font-semibold">Producer Name</h2>
                            <p className="text-white">John Doe</p>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold">Director Name</h2>
                            <p className="text-white">Jane Smith</p>
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Add to Cart</button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">Rent</button>
                    </div>
                </div>
                <div className="md:w-1/3 p-4">
                    <img src={movie.image || banner} alt={movie.title} className="w-full h-auto rounded" />
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl text-white font-bold">Featured Actors</h2>
                <div className="flex space-x-4 mt-4">
                    {/* Placeholder for actor images and names */}
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="text-white mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="text-white mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="text-white mt-2">Actor Name</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
