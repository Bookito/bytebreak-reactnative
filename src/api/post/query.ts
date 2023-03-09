import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { GET_POSTS } from "../queryKey";
import { getPosts } from "./api";
import {sortAndFormat} from "./converter";

export const usePosts = () => {
  return useQuery(GET_POSTS, getPosts, {
    select: (response: AxiosResponse) => {
      return sortAndFormat(response.data.posts);
    },
  });
};
