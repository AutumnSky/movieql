export let movies = [
  {
    id: 0,
    name: 'movie0',
    score: 0
  },
  {
    id: 1,
    name: 'movie1',
    score: 1
  },
  {
    id: 2,
    name: 'movie2',
    score: 2
  },
  {
    id: 3,
    name: 'movie3',
    score: 3
  },
  {
    id: 4,
    name: 'movie4',
    score: 4
  },
  {
    id: 5,
    name: 'movie5',
    score: 5
  },
  {
    id: 6,
    name: 'movie6',
    score: 6
  }
];

export const getById = (id) => {
  return movies.filter((movie) => movie.id === id)[0];
};

export const deleteById = (id) => {
  const modified = movies.filter((movie) => movie.id !== id);
  if (movies.length === modified.length) {
    return false;
  } else {
    movies = modified;
    return true;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score
  };

  movies.push(newMovie);

  return newMovie;
};
