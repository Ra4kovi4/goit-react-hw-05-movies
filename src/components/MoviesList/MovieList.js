import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  TitleMovie,
  StyledLink,
  Poster,
} from './PopularityMovies.styled';

export const MovieList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(
        ({ id, original_name, original_title, title, poster_path }) => (
          <ListItem key={id}>
            <StyledLink to={`/movie/${id}`} state={{ from: location }}>
              <Poster
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/original${poster_path}`
                    : 'https://i.postimg.cc/g2dNFPgn/Placeholder.png'
                }
                alt={title || original_title || original_name}
              />
              <TitleMovie>
                {title || original_title || original_name}
              </TitleMovie>
            </StyledLink>
          </ListItem>
        )
      )}
    </List>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      original_name: PropTypes.string,
      original_title: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ).isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }).isRequired,
};
