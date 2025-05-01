import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const [featuredMovies] = useState([
        { title: 'Featured Movie 1', description: 'Description 1', cover: 'featured1.jpg' },
        { title: 'Featured Movie 2', description: 'Description 2', cover: 'featured2.jpg' },
        { title: 'Featured Movie 3', description: 'Description 3', cover: 'featured3.jpg' },
        { title: 'Featured Movie 4', description: 'Description 4', cover: 'featured4.jpg' },
    ]);

    const [movies] = useState([
        { title: 'Movie 1', description: 'Description 1', cover: 'cover1.jpg' },
        { title: 'Movie 2', description: 'Description 2', cover: 'cover2.jpg' },
        { title: 'Movie 3', description: 'Description 3', cover: 'cover3.jpg' },
        { title: 'Movie 4', description: 'Description 4', cover: 'cover4.jpg' },
        { title: 'Movie 5', description: 'Description 5', cover: 'cover5.jpg' },
        { title: 'Movie 6', description: 'Description 6', cover: 'cover6.jpg' },
        { title: 'Movie 7', description: 'Description 7', cover: 'cover7.jpg' },
        { title: 'Movie 8', description: 'Description 8', cover: 'cover8.jpg' },
        { title: 'Movie 9', description: 'Description 9', cover: 'cover9.jpg' },
        { title: 'Movie 10', description: 'Description 10', cover: 'cover10.jpg' },
    ]);

    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    const nextMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % featuredMovies.length);
    };

    const prevMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex - 1 + featuredMovies.length) % featuredMovies.length);
    };

    const selectMovie = (index: number) => {
        setCurrentMovieIndex(index);
    };

    return (
        <div className="bg-gray-100">
            {/* Banner Section */}
            <div className="relative h-64 bg-cover bg-center z-2" style={{ backgroundImage: `url(${featuredMovies[currentMovieIndex].cover})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4">
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
                <h2 className="text-2xl font-bold mb-4">New Releases</h2>
                <div className="grid grid-cols-5 gap-4">
                    {movies.slice(0, 5).map((movie, index) => (
                        <div key={index} className="relative bg-white p-2 rounded-lg shadow-md">
                            <img src={movie.cover} alt={movie.title} className="w-full h-48 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
                            <p className="text-sm mb-4">{movie.description}</p>
                            <div className="flex justify-between mt-2">
                                <Link to={`/details/${movie.title}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">Details</Link>
                                <Link to={`/rental/${movie.title}`} className="bg-green-500 text-white px-4 py-2 rounded-full">Rent</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Suggested Movies Section */}
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Suggested Movies</h2>
                <div className="grid grid-cols-5 gap-4">
                    {movies.slice(5, 10).map((movie, index) => (
                        <div key={index} className="relative bg-white p-2 rounded-lg shadow-md">
                            <img src={movie.cover} alt={movie.title} className="w-full h-48 object-cover rounded-lg" />
                            <h3 className="text-lg font-semibold mt-2">{movie.title}</h3>
                            <p className="text-sm mb-4">{movie.description}</p>
                            <div className="flex justify-between mt-2">
                                <Link to={`/details/${movie.title}`} className="bg-blue-500 text-white px-4 py-2 rounded-full">Details</Link>
                                <Link to={`/rental/${movie.title}`} className="bg-green-500 text-white px-4 py-2 rounded-full">Rent</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
