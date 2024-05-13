import axios from "axios";

const JdApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // Replace with your API base URL
});

// Request interceptor
JdApi.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const getToken = localStorage.getItem("token") || "";
    const accessToken = getToken;

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) {
        config.headers.token = `Bearer ${accessToken}`;
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor

// Response interceptor
JdApi.interceptors.response.use(
  (response) => {
    // Modify the response data here

    return response;
  },
  (error) => {
    // Handle response errors here

    return Promise.reject(error);
  }
);
// End of Response interceptor

// eslint-disable-next-line react-refresh/only-export-components
export default JdApi;
