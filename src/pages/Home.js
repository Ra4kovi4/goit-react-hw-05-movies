import { getPopularityMoovie } from 'service/fetchMoovie';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MovieList } from '../components/MoviesList/MovieList';
import { Loader } from '../components/Loader/Loader';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    setIsLoad(true);

    const fetchPopularityMovie = async () => {
      try {
        const data = await getPopularityMoovie();

        setMovies(data);
      } catch (error) {
        console.log(error);
        toast.warn(`Oops, something went wrong! Try again`);
      } finally {
        setIsLoad(false);
      }
    };
    fetchPopularityMovie();
  }, []);

  return (
    <>
      {isLoad && <Loader />}
      <MovieList movies={movies} location={location} />
    </>
  );
};
export default Home;
