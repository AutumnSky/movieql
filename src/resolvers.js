import * as peopleDB from './db.people';
import * as movieDB from './db.movie';
import * as ytsDB from './db.yts';

const resolvers = {
  Query: {
    people: () => peopleDB.people,
    person: (_, { id }) => peopleDB.getById(id),
    movies: () => movieDB.movies,
    movie: (_, { id }) => movieDB.getById(id),
    YTSmovies: (_, { limit, minimum_rating }) => ytsDB.getMovies(limit, minimum_rating),
    YTSmovie: (_, { id }) => ytsDB.getMovieById(id)
  },
  Mutation: {
    deleteMovie: (_, { id }) => movieDB.deleteById(id),
    addMovie: (_, { name, score }) => movieDB.addMovie(name, score)
  }
};

export default resolvers;
