import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './pageCSS/login.css'; // Ensure this path is correct

const Login = () => {
  const [email, setEmail] = useState('');
  const [aadharNumber, setAadharNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email: email || undefined,
        aadharNumber: aadharNumber || undefined,
        password
      }, {
        params: {
          email: email || undefined,
          aadharNumber: aadharNumber || undefined,
          password
        }
      });

      const user = response.data;
      setUser(user);
      setError('');

      // Redirect based on user role
      switch (user.role) {
        case 'EMPLOYEE':
          navigate('/employee');
          break;
        case 'FARMER':
          navigate('/farmer');
          break;
        case 'ACCOUNTANT':
          navigate('/accountant');
          break;
        case 'CUSTOMER':
          navigate('/customer');
          break;
        case 'ADMIN':
          navigate('/admin');
          break;
        default:
          setError('Unknown role.');
      }
    } catch (error) {
      setError('Invalid email/Aadhar number or password.');
      setUser(null);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input
            type="text"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {user && <p className="welcome-message">Welcome, {user.name} {user.role}!</p>}
    </div>
  );
};

export default Login;
