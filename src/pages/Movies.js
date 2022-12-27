import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoovieByName } from '../service/fetchMoovie';
import { MovieList } from '../components/MoviesList/MovieList';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [queryMovies, setQueryMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();
  useEffect(() => {
    setIsLoading(true);
    const fetchMovieByName = async () => {
      try {
        const data = await getMoovieByName(searchQuery.toLowerCase().trim());
        if (data.length === 0) {
          toast.info("We didn't find any movies for your query");
        }
        setQueryMovies(data);
      } catch (error) {
        console.log(error);
        toast.warn(`Oops, something went wrong! Try again`);
      } finally {
        setIsLoading(false);
      }
    };
    if (searchQuery === '') {
      return;
    } else {
      fetchMovieByName();
    }
  }, [searchQuery]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };
  return (
    <>
      {isLoading && Loader}
      <SearchForm onSubmit={handleSubmit} />
      <MovieList movies={queryMovies} location={location} />
    </>
  );
};
export default Movies;
