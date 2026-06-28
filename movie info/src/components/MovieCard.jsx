function MovieCard({movie}){
    function onFavoriteClick(){
        alert("clicked")
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.tittle} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>❤︎</button>

            </div>

        </div>

    </div>
}