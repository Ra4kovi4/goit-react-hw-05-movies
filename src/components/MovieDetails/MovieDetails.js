import PropTypes from 'prop-types';

import {
  Wrapper,
  Poster,
  TitleMovie,
  InfoWrapper,
  DetailsList,
  DetailsItem,
} from './MovieDetails.styled';

export const MovieDetails = ({ movie }) => {
  return (
    <InfoWrapper>
      <Poster
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : 'https://i.postimg.cc/g2dNFPgn/Placeholder.png'
        }
        alt={movie.title}
      />
      <Wrapper>
        <TitleMovie>
          {movie.title} ({parseFloat(movie.release_date)})
        </TitleMovie>
        <DetailsList>
          <DetailsItem>
            <p>
              User score: <b>{movie.vote_average.toFixed(1)}</b>
            </p>
          </DetailsItem>
          <DetailsItem>
            <b>Overwiew:</b>
            <p>{movie.overview}</p>
          </DetailsItem>
          <DetailsItem>
            <b>Genres: </b>
            <p> {movie.genres.map(genre => genre.name).join(', ')}</p>
          </DetailsItem>
        </DetailsList>
      </Wrapper>
    </InfoWrapper>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
