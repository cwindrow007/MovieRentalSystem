import React from 'react';

interface MovieDetailsProps {
    title: string;
    time: string;
    releaseYear: number;
    genre: string;
    description: string;
    producerName: string;
    directorName: string;
    rating: number; // Assuming rating is out of 5
    featuredActors: { name: string, imageUrl?: string }[];
}

const MovieDetails: React.FC<MovieDetailsProps> = ({
                                                       title,
                                                       time,
                                                       releaseYear,
                                                       genre,
                                                       description,
                                                       producerName,
                                                       directorName,
                                                       rating,
                                                       featuredActors
                                                   }) => {

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i}>&#9733;</span>); // filled star
            } else {
                stars.push(<span key={i}>&#9734;</span>); // empty star
            }
        }
        return stars;
    };

    return (
        <div>
            <h1>{title}</h1>
            <p>{time}, {releaseYear}</p>
            <p>Genre: {genre}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="https://via.placeholder.com/150" alt="Movie Poster" style={{ marginRight: '20px' }} />
                <div>
                    <p>Description:</p>
                    <p>{description}</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <div><strong>Producer:</strong> {producerName}</div>
                <div><strong>Director:</strong> {directorName}</div>
            </div>
            <div style={{ marginTop: '20px' }}>
                <strong>Rating:</strong> {renderStars(rating)}
            </div>
            <div style={{ marginTop: '20px' }}>
                <button>Add to Cart</button>
                <button>Rent</button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <strong>Featured Actors:</strong>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {featuredActors.map((actor, index) => (
                        <div key={index} style={{ margin: '10px' }}>
                            <img src={actor.imageUrl || "https://via.placeholder.com/100"} alt={actor.name} style={{ width: '100px', height: '100px' }} />
                            <p>{actor.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;

