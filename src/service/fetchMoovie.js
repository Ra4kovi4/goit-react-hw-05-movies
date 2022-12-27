import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '27957f45446c592c6fc00916bd09edac';
//запрос популярных фильмов
export const getPopularityMoovie = async () => {
  const { data } = await axios.get('/trending/all/day', {
    params: {
      api_key: KEY,
    },
  });
  return data.results;
};

//запрос фильма по ключевому слову
export const getMoovieByName = async query => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
      api_key: KEY,
      include_adult: false,
    },
  });
  return data.results;
};

//запрос инфо о фильме по id
export const getMoovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

//запрос на каст фмльма

export const getMooviecastById = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data.cast;
};

//запрос ревью на фильм
export const getMovieReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data.results;
};
