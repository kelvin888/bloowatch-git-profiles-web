import { toast } from "react-toastify";
import { GitHubClient } from "./axiosInstance";

export const fetchGitProfiles = async (payload: any) => {
  try {
    const response = await GitHubClient.get(
      `/search/repositories?q=${payload?.query}&page=${payload?.page}&per_page=${payload?.per_page}`
    );    
    return response;

  } catch (error) {
    const errorMessage = parseGitHubError(error);
    toast.error(errorMessage)
  }
};


function parseGitHubError(error: any): string {
  let errorMessage = 'An error occurred while processing the request.';

  if (error.response) {
    if (error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;

      if (error.response.data.errors && Array.isArray(error.response.data.errors)) {
        const errorDetails = error.response.data.errors.map((err: any) => `${err.resource} (${err.field}): ${err.code}`);
        errorMessage += ': ' + errorDetails.join(', ');
      }
    }
  } else if (error.request) {
    errorMessage = 'No response received from the server.';
  } else {
    errorMessage = 'Error: ' + error.message;
  }

  return errorMessage;
}

