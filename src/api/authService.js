// authService.js

import wretch from 'wretch';

const baseUrl = 'https://api-3wa-ecomm-524fde41edfa.herokuapp.com/api';

const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzRiMzc3NzAzMGNmMDJlYjJhZTVkZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNzQwODMxMX0._yg32w1JO6eoFPUj7yQ4ttLWsyFdMk733ZNZTNzWSYQ";

const AuthService = {
  signup: (userData) => wretch(`${baseUrl}/signup`).post(userData).json(),
  login: (credentials) => wretch(`${baseUrl}/login`).post(credentials).json(),

    getProfile: () =>
      wretch(`${baseUrl}/users/me`)
        .auth(`Bearer ${localStorage.getItem('token') || adminToken}`)
        .get()
        .json(),

    updateProfile: (profileData) =>
      wretch(`${baseUrl}/users/me`)
        .auth(`Bearer ${localStorage.getItem('token') || adminToken}`)
        .put(profileData)
        .json(),
  };

export default AuthService;
