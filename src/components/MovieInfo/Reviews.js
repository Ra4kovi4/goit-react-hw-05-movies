import { getMovieReview } from '../../service/fetchMoovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  ReviewList,
  ReviewItem,
  ReviewAythor,
  Rewiew,
  Container,
} from './Rewiews.styled';

const MovieReview = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchCastMovie = async () => {
      try {
        const data = await getMovieReview(id);

        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastMovie();
  }, [id]);
  console.log(reviews);
  return (
    <>
      <Container>
        {reviews?.length !== 0 ? (
          <ReviewList>
            {reviews.map(({ id, author, content }) => (
              <ReviewItem key={id}>
                <ReviewAythor>Author: {author}</ReviewAythor>
                <Rewiew>{content}</Rewiew>
              </ReviewItem>
            ))}
          </ReviewList>
        ) : (
          <h2>Unfortunately, there are no reviews of this film</h2>
        )}
      </Container>
    </>
  );
};
export default MovieReview;
