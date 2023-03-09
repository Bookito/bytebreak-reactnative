import apiClient from "../apiClient";

export const getPosts = () => {
  return apiClient.get("/posts");
};
