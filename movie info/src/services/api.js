const API_KEY = "ceb3f6356eb30e015542d63183572903"
const BASE_URL = "https://api.themoviedb.org/3"


export const getPopularMovies = async() => {
    const response = await fetch('${BASE_URL}/movie/')
}