const crypto = require('crypto');
const bcrypt = require('bcryptjs');

// Encrypt the password
async function encryptPassword(password) {
  const secretKey = process.env.PASSWORD_SECRET_KEY; // Secret key used for encryption
  const hashedPassword = await bcrypt.hash(password, 10);

  const algorithm = 'aes-256-cbc';
  const key = crypto
    .createHash('sha256')
    .update(secretKey)
    .digest('base64')
    .substr(0, 32);
  const iv = crypto.randomBytes(16); // Generate a random IV
  console.log('iv', iv.toString('hex'));
  const cipher = crypto.createCipheriv(algorithm, key, iv); // Create a cipher object with the algorithm, key, and IV

  let encryptedPassword = cipher.update(hashedPassword, 'utf8', 'hex');
  encryptedPassword += cipher.final('hex');

  const combined = iv.toString('hex') + encryptedPassword; // Combine the IV and encrypted password

  return combined;
}

// Decrypt the password
function decryptPassword(encryptedPassword) {
  const secretKey = process.env.PASSWORD_SECRET_KEY; // Secret key used for decryption
  const algorithm = 'aes-256-cbc';
  const key = crypto
    .createHash('sha256')
    .update(secretKey)
    .digest('base64')
    .substr(0, 32);
  const iv = Buffer.from(encryptedPassword.slice(0, 32), 'hex'); // Extract the IV from the encrypted password

  const decipher = crypto.createDecipheriv(algorithm, key, iv); // Create a decipher object with the algorithm, key, and IV

  let decryptedPassword = decipher.update(encryptedPassword.slice(32), 'hex', 'utf8');
  decryptedPassword += decipher.final('utf8');

  return decryptedPassword;
}

// Compare passwords
async function comparePasswords(password, encryptedPassword) {
  const decryptedPassword = decryptPassword(encryptedPassword);
  return bcrypt.compareSync(password, decryptedPassword); // Compare the original password with the decrypted password
}

module.exports = {
  encryptPassword,
  decryptPassword,
  comparePasswords
};
