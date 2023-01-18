import { fetchInstance } from "../instance/index";

export const fetchNews = async () => {
  const { data } = await fetchInstance().get();

  return data;
};
