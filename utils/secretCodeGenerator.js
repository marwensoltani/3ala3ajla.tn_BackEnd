const CryptoJS = require("crypto-js");
const shortid = require("shortid");


module.exports = {
  encrypt(text) {
    // encryption is long so switching to shortid
    // maybe in .env
    // const passphrase = "3ala3ajla is awesome";
    // return CryptoJS.AES.encrypt(text, passphrase).toString();
    return shortid.generate();
  },

  decrypt(ciphertext) {
    const passphrase = "3ala3ajla is awesome";
    const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
    const originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  }
};

