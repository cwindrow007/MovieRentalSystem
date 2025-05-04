import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../components/moutain.jpg';
import moviesData from '../movies.json';

// Optional: Define a TypeScript interface for movie objects
interface Movie {
    id: number;
    title: string;
    description: string;
    genre: string;
    image: string;
}

const Home = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        setMovies(moviesData);
    }, []);

    //First movies are manually selected in code for now
    const featuredMovies = movies.slice(12, 17).map((movie, index) => ({
        title: movie.title,
        description: movie.description || 'No description available.',
        cover: movie.image || banner,
        tintColor: ['bg-pink-500', 'bg-green-500', 'bg-purple-500', 'bg-blue-500'][index % 4],
    }));

    const nextMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    };

    const prevMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex - 1 + featuredMovies.length) % featuredMovies.length);
    };

    const selectMovie = (index: number) => {
        setCurrentMovieIndex(index);
    };

    if (featuredMovies.length === 0) {
        return <div className="text-white p-4">Loading featured movies...</div>;
    }

    return (
        <div className="bg-gray-700">
            {/* Banner Section */}
            <div className="relative h-64 bg-cover bg-center z-2" style={{ backgroundImage: `url(${featuredMovies[currentMovieIndex].cover})` }}>
                <div className={`absolute inset-0 ${featuredMovies[currentMovieIndex].tintColor} opacity-30 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-white-100 bg-opacity-5 flex flex-col items-center justify-center text-white p-4">
                    <h1 className="text-4xl font-bold">{featuredMovies[currentMovieIndex].title}</h1>
                    <p className="text-lg">{featuredMovies[currentMovieIndex].description}</p>
                </div>
                <button onClick={prevMovie} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
                    &lt;
                </button>
                <button onClick={nextMovie} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
                    &gt;
                </button>
                <div className="absolute bottom-4 flex justify-center w-full">
                    {featuredMovies.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => selectMovie(index)}
                            className={`w-3 h-3 rounded-full mx-1 ${index === currentMovieIndex ? 'bg-white' : 'bg-gray-400'}`}
                        />
                    ))}
                </div>
            </div>

            {/* New Releases Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-white underline">New Releases</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-11 pl-5 pr-5">
                    {movies.slice(0, 6).map((movie) => (
                        <div key={movie.id} className="flex flex-col justify-between h-full bg-gray-800 p-2 rounded-md drop-shadow-lg shadow-lg transform transition-transform hover:scale-105">
                            <div className="w-full h-64 bg-center bg-cover bg-no-repeat rounded-md" style={{ backgroundImage: `url(${movie.image})` }} />
                            <h3 className="text-white text-lg font-semibold mt-2 text-left leading-tight">{movie.title}</h3>
                            <div className="flex justify-between mt-4">
                                <Link to={`/MovieDetails/${movie.title}`} className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm transform transition-transform hover:scale-105">Details</Link>
                                <Link to={`/rental/${movie.title}`} className="bg-green-500 text-white px-4 py-1 rounded-md text-sm transform transition-transform hover:scale-105">Rent</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Suggested Movies Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-white underline">Suggested Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-11 pl-5 pr-5">
                    {movies.slice(6, 12).map((movie) => (
                        <div key={movie.id} className="flex flex-col justify-between h-full bg-gray-800 p-2 rounded-md drop-shadow-lg shadow-lg transform transition-transform hover:scale-105">
                            <div className="w-full h-64 bg-center bg-cover bg-no-repeat rounded-md" style={{ backgroundImage: `url(${movie.image})` }} />
                            <h3 className="text-white text-lg font-semibold mt-2 text-left leading-tight">{movie.title}</h3>
                            <div className="flex justify-between mt-4">
                                <Link to={`/MovieDetails/${encodeURIComponent(movie.title)}`} className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm transform transition-transform hover:scale-105">Details</Link>
                                <Link to={`/rental/${movie.title}`} className="bg-green-500 text-white px-4 py-1 rounded-md text-sm transform transition-transform hover:scale-105">Rent</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
