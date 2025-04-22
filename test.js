const { encrypt, decrypt } = require('./script.js');

// Test payload
const testPayload = {
    userId: '12345',
    username: 'testuser',
    role: 'admin'
};

// Encrypt the payload
const token = encrypt(testPayload);
console.log('Encrypted Token:', token);

// Decrypt the token
const decryptedPayload = decrypt(token);
console.log('Decrypted Payload:', decryptedPayload);

// Test with invalid token
const invalidToken = 'invalid.token.here';
const invalidResult = decrypt(invalidToken);
console.log('Invalid Token Result:', invalidResult);

// Check if the decryption was successful
if (decryptedPayload && decryptedPayload.userId === testPayload.userId) {
    console.log('Success: Token encryption and decryption working correctly!');
} else {
    console.log('Error: Token encryption and decryption failed!');
} 