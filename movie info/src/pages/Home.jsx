import MovieCard from "../components/MovieCard";

function Home() { 
    const movies = [
        {id: 1, title: "my movie", release_date: "2020"},
        {id: 1, title: "Your movie", release_date: "2024"},
        {id: 1, title: "Their movie", release_date: "1997"},

    ];
    return (
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}
export default Home