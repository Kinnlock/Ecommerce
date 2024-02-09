// authService.js

import wretch from 'wretch';

const baseUrl = 'https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api';

const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzRiMzc3NzAzMGNmMDJlYjJhZTVkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzQ5MTM2M30.P57Sqw6SwfkTtehE6bvufU4P2Cdz9wWsKifJdgz3k6M";

const AuthService = {
  signup: (userData) => wretch(`${baseUrl}/signup`).post(userData).json(),
  login: (credentials) => wretch(`${baseUrl}/login`).post(credentials).json(),

    getProfile: () =>
      wretch(`${baseUrl}/users/me`)
        .headers({'x-auth-token': adminToken} )
        .get()
        .json(),

    updateProfile: (profileData) =>
      wretch(`${baseUrl}/users/me`)
        .headers(`Bearer ${localStorage.getItem('token') || adminToken}`)
        .put(profileData)
        .json(),
  };

export default AuthService;
