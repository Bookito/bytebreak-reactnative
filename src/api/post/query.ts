import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { getPosts } from "./api";
import { GET_POSTS } from "../queryKey";

export const usePosts = () => {
  return useQuery(GET_POSTS, getPosts, {
    select: (response: AxiosResponse) => {
      return response.data.posts;
    },
  });
};
