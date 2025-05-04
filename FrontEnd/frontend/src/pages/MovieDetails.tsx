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
        <div className="bg-gray-100 p-8 min-h-screen">
            <main className="flex flex-col md:flex-row">
                <section className="md:w-2/3 p-4 flex flex-col items-center justify-center">
                    <h2 className="text-6xl font-bold text-center">{movie.title}</h2>
                    <p className="mt-4 text-center text-2xl">{new Date().getFullYear()} | Genre: {movie.genre}</p>
                    <p className="mt-6 text-center text-xl">{movie.description}</p>
                    <div className="flex mt-8 justify-center">
                        <div className="mr-16 text-center">
                            <h3 className="font-semibold text-2xl">Producer Name</h3>
                            <p className="text-xl">John Doe</p>
                        </div>
                        <div className="text-center">
                            <h3 className="font-semibold text-2xl">Director Name</h3>
                            <p className="text-xl">Jane Smith</p>
                        </div>
                    </div>
                    <div className="flex mt-8 space-x-8 justify-center">
                        <button className="bg-white text-black px-6 py-3 rounded border text-xl">Add to Cart</button>
                        <button className="bg-green-500 text-white px-6 py-3 rounded text-xl">Rent</button>
                    </div>
                </section>
                <aside className="md:w-1/3 p-4 flex flex-col items-center">
                    <img src={movie.image || banner} alt={movie.title} className="w-full h-auto rounded" />
                    <div className="mt-4 text-center">
                        <h3 className="text-2xl font-bold">Rating:
                            <span className="text-yellow-500 ml-2">&#9733;</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-yellow-500">&#9733;</span>
                            <span className="text-gray-400">&#9733;</span>
                        </h3>
                    </div>
                </aside>
            </main>

            <section className="mt-8">
                <hr className="my-4 border-gray-400" />
                <h3 className="text-2xl font-bold text-center">Featured Actors</h3>
                <div className="flex justify-center space-x-4 mt-4">
                    {/* Placeholder for actor images and names */}
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="mt-2">Actor Name</p>
                    </div>
                    <div className="text-center">
                        <div className="w-24 h-24 bg-gray-500 rounded-full"></div>
                        <p className="mt-2">Actor Name</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MovieDetails;





