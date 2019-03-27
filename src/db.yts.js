import axios from 'axios';

const BASE_URL = 'https://yts.am/api/v2';
const LIST_MOVIES_URL = `${BASE_URL}/list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}/movie_details.json`;

export const getMovies = async (limit, minimum_rating) => {
  const { data: { data: { movies } } } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating
    }
  });
  return movies;
};

export const getMovieById = async (id) => {
  const { data: { data: { movie } } } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });
  return movie;
};
