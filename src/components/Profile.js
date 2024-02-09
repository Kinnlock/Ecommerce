// Profile.js

import React, { useEffect, useState } from 'react';
import AuthService from '../api/authService';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await AuthService.getProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  // Display profile JSX goes here
};

export default Profile;
