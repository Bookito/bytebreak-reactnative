import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "http://bytebreakserver-env.eba-v9vxu2b5.ap-northeast-2.elasticbeanstalk.com", // need to change
  timeout: 5000,
});

apiClient.interceptors.request.use(
  async (response) => {
    return response;
  },
  (error) => {
    if (
      error.response?.data?.status > 400 &&
      error.response?.data?.status !== 503
    )
      return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
