// Signup.js

import { useState } from 'react';
import AuthService from '../api/authService';

const Signup = () => {
  const [userData, setUserData] = useState({
    nom: '',
    prenom: '',
    age: '',
    address: {
      ville: '',
      postalCode: '',
      numeroRue: '',
      nomRue: '',
    },
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    if (e.target.name in userData.address) {
      setUserData({
        ...userData,
        address: { ...userData.address, [e.target.name]: e.target.value },
      });
    } else {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AuthService.signup(userData);
      alert('Signup successful');
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div>
        <label>Nom:</label>
        <input type="text" name="nom" value={userData.nom} onChange={handleChange} required />
      </div>
      <div>
        <label>Prénom:</label>
        <input type="text" name="prenom" value={userData.prenom} onChange={handleChange} required />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" name="age" value={userData.age} onChange={handleChange} required />
      </div>
      <div>
        <label>Ville:</label>
        <input type="text" name="ville" value={userData.address.ville} onChange={handleChange} required />
      </div>
      <div>
        <label>Code Postal:</label>
        <input type="text" name="postalCode" value={userData.address.postalCode} onChange={handleChange} required />
      </div>
      <div>
        <label>Numéro de Rue:</label>
        <input type="text" name="numeroRue" value={userData.address.numeroRue} onChange={handleChange} required />
      </div>
      <div>
        <label>Nom de Rue:</label>
        <input type="text" name="nomRue" value={userData.address.nomRue} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={userData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
