import axios from 'axios'

export const GitHubClient = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: {
    'Accept': 'application/vnd.GitHub.v3+json',
    'Authorization': import.meta.env.SEARCH_KEY
  }
});

GitHubClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 400 && error.response.data.errors) {
        const validationErrors = error.response.data.errors;
        return Promise.reject(validationErrors);
      } else {
        return Promise.reject(error);
      }
    } else if (error.request) {
      return Promise.reject(new Error('No response received from the server.'));
    } else {
      return Promise.reject(error);
    }
  }
);
