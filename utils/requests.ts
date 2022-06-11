const API_KEY = process.env.API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

export const requests = {
  fetchPopularMovies: `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopularSeries: `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRatedSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
}
