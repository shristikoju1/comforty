
// Access token management using sessionStorage
export const getAccessToken = () => sessionStorage.getItem('accessToken');
export const setAccessToken = (token) => sessionStorage.setItem('accessToken', token);
export const removeAccessToken = () => { sessionStorage.removeItem('accessToken'); localStorage.removeItem('accessToken'); }

// Cookie-based refresh token management
export const removeRefreshToken = () => {
    document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

// Clear all tokens (for logout)
export const removeTokens = () => {
    removeAccessToken();
    removeRefreshToken();
};
