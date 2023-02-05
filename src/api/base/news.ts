import { fetchInstance } from '../instance/index';

export const getNews = async () => {
  const { data } = await fetchInstance().get(
    `/news/events`);

  return data;
};
