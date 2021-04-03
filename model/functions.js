const config = require('../config.json');
const path = require('path');
const sh = require('shortid');
const fs = require('fs');

async function uploadImage(req) {
  if (config.apikey) {
    if (req.header('key') !== config.apikey) {
      return { code: 403, data: 'API key not found' };
    }
  }
  if (!req.files) return { code: 400, data: 'No file uploaded' };
  const file = req.files.sharex;
  let fileExtension = getExtension(file.name);
  let fileName = `${generateRandomString()}.${fileExtension}`;
  let path2save = path.join(__dirname, '../', 'uploads', fileName);
  if (config.path) {
    if (!fs.existsSync(config.path)) return { code: 404, data: 'Path does not exist' };
    path2save = path.join(config.path, fileName);
  }
  file.mv(path2save, function (err) {
    if (err) return { code: 500, data: err };
  });
  return { code: 200, data: fileName };
}

function generateRandomString() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  if (config.chars) {
    characters = config.chars;
  }

  const charactersLength = characters.length;
  let urllength = config.urllength;
  if (urllength > 3) urllength = 3;
  for (var i = 0; i < urllength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getExtension(fileName) {
  var ext = path.extname(fileName || '').split('.');
  return ext[ext.length - 1];
}

module.exports = { uploadImage };
