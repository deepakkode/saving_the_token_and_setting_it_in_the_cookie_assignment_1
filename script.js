require('dotenv').config();

const jwt = require('jsonwebtoken');

// Secret key for signing and verifying tokens
const SECRET_KEY = process.env.SECRET_KEY; // Replace with a strong secret key

const encrypt = (payload) => {
  // Sign the payload and return the token
  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

const decrypt = (token) => {
  try {
    // Verify the token and return the decoded payload
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    // Handle invalid or expired token
    console.error('Invalid or expired token:', error.message);
    return null;
  }
};

module.exports = {
  encrypt,
  decrypt
};
