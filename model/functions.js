const path = require('path');
require('dotenv').config();

async function uploadImage(key, req) {
  console.log(key, req);
  return {
    code: 200,
    data: key,
  };
}

function generateRandomString() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  if (process.env.CHARS != '') {
    characters = process.env.CHARS;
  }

  const charactersLength = characters.length;
  for (var i = 0; i < process.env.URLLENGTH; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

module.exports = { uploadImage };
