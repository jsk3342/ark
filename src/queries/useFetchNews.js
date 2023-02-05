import { useQuery } from 'react-query';
import { getNews } from '../api/base/news';

export const useFetchNews = () => {
  const { data } = useQuery(`News`, () => getNews());
  return data;
};

