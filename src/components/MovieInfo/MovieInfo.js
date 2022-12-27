import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import {
  Container,
  StyledNavLink,
  StyledIcon,
  StyledLink,
} from './MovieInfo.styled';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';

import { getMoovieById } from '../../service/fetchMoovie';
// import { Moviedetails } from '../MovieDetails/MovieDetails';
const MovieInfo = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const data = await getMoovieById(Number(id));
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [id]);

  return (
    <>
      <Container>
        <StyledNavLink to={backLinkHref}>
          <StyledIcon />
          Back to movies
        </StyledNavLink>
        {movie && <MovieDetails movie={movie} />}
      </Container>
      <Container>
        <StyledLink to="credits" state={{ from: backLinkHref }}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </StyledLink>
      </Container>
      <Outlet />
    </>
  );
};
export default MovieInfo;
