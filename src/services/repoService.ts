import { BASE_URL } from "../constants/env";
import { api } from "../utils/api";

export const getReposWithOwner = async (owner: string) => {
  const { data } = await api.get(`/${owner}/repos`);

  return data;
};
