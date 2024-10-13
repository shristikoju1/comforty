import { getAccessToken, setAccessToken } from '../utils/tokenUtils';
import { refreshToken } from './authApi';

export const customFetch = async (url, options = {}) => {
  const accessToken = getAccessToken();
  const modifiedOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };

  let response = await fetch(url, modifiedOptions);

  // If access token has expired, refresh and retry
  if (response.status === 401) {
    const newTokenResponse = await refreshToken();
    if (newTokenResponse.ok) {
      const { accessToken: newAccessToken } = await newTokenResponse.json();
      setAccessToken(newAccessToken); // Store new access token
      modifiedOptions.headers.Authorization = `Bearer ${newAccessToken}`;
      response = await fetch(url, modifiedOptions);
    } else {
      // Handle refresh token failure (e.g., log out user)
      throw new Error('Session expired. Please log in again.');
    }
  }

  return response;
};
