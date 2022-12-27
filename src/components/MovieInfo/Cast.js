import { getMooviecastById } from '../../service/fetchMoovie';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastList,
  ListItem,
  CastPoster,
  CastName,
  Character,
} from './Cast.styled';
const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchCastMovie = async () => {
      try {
        const data = await getMooviecastById(id);

        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastMovie();
  }, [id]);
  console.log(cast);
  return (
    <>
      {cast?.length !== 0 ? (
        <CastList>
          {cast.map(({ name, profile_path, character }) => (
            <ListItem key={name}>
              <CastPoster
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : 'https://i.postimg.cc/g2dNFPgn/Placeholder.png'
                }
                alt={name}
              />
              <CastName>{name}</CastName>
              <Character>
                Character: <b>{character}</b>
              </Character>
            </ListItem>
          ))}
        </CastList>
      ) : (
        <h2>Sorry we did't find any information about cast</h2>
      )}
    </>
  );
};
export default MovieCast;
