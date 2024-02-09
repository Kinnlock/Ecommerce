// Profile.js

import React, { useEffect, useState } from 'react';
import AuthService from '../api/authService';

const Profile = () => {
  const [profile, setProfile] = useState({
    nom: '',
    prenom: '',
    age: 0,
    address: {
      ville: '',
      postalCode: '',
      numeroRue: '',
      nomRue: '',
    },
    email: '',
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name in profile.address) {
      setProfile(prevProfile => ({
        ...prevProfile,
        address: { ...prevProfile.address, [name]: value },
      }));
    } else {
      setProfile(prevProfile => ({
        ...prevProfile,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.updateProfile(profile);
      alert('Profile updated successfully.');
    } catch (error) {
      console.error('Failed to update profile', error);
      alert('Failed to update profile.');
    }
  };

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={profile.email} readOnly />
        </div>
        <div>
          <label>Nom:</label>
          <input type="text" name="nom" value={profile.nom} onChange={handleInputChange} />
        </div>
        <div>
          <label>Prénom:</label>
          <input type="text" name="prenom" value={profile.prenom} onChange={handleInputChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={profile.age} onChange={handleInputChange} />
        </div>
        <div>
          <label>Ville:</label>
          <input type="text" name="ville" value={profile.address.ville} onChange={handleInputChange} />
        </div>
        <div>
          <label>Code Postal:</label>
          <input type="text" name="postalCode" value={profile.address.postalCode} onChange={handleInputChange} />
        </div>
        <div>
          <label>Numéro de Rue:</label>
          <input type="text" name="numeroRue" value={profile.address.numeroRue} onChange={handleInputChange} />
        </div>
        <div>
          <label>Nom de Rue:</label>
          <input type="text" name="nomRue" value={profile.address.nomRue} onChange={handleInputChange} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
