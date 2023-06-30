const crypto = require('crypto');

const getHashedPassword = (senha) => {
  const sha256 = crypto.createHash('sha256');
  const hash = sha256.update(String(senha)).digest('base64');
  return hash;
};

module.exports = getHashedPassword;
