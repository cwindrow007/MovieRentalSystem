import banner from '../components/moutain.jpg';

const UserDashboardPage = () => {
    const placeholderMovies = [
        {
            id: 1,
            title: "Placeholder Movie 1",
            image: banner,
            rentedOn: "2025-05-01",
            expirationDate: "2025-05-08"
        },
        {
            id: 2,
            title: "Placeholder Movie 2",
            image: banner,
            rentedOn: "2025-05-02",
            expirationDate: "2025-05-09"
        },
        {
            id: 3,
            title: "Placeholder Movie 3",
            image: banner,
            rentedOn: "2025-05-03",
            expirationDate: "2025-05-10"
        }
    ];

    return (
        <div className="bg-gray-100 p-8 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {placeholderMovies.map((movie) => (
                    <div key={movie.id} className="bg-white p-4 rounded shadow-lg flex flex-col items-center">
                        <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover rounded mb-4" />
                        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                        <p className="text-gray-700 mb-2">Rented: {movie.rentedOn}</p>
                        <p className="text-gray-700 mb-4">Expires: {movie.expirationDate}</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Watch</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserDashboardPage;
