import axios from 'axios';

// Login request to the server
const login = async (user) => {
  try {
    return await axios.post('/api/auth/login', user);
  } catch (err) {
    return err.response.data;
  }
};

// Register request to the server
const register = async (user) => {
  try {
    return await axios.post('/api/auth/register', user);
  } catch (err) {
    return err.response.data;
  }
};

const authService = {
  login,
  register,
};

export default authService;
