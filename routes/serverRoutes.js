const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { uploadImage, getImage } = require('../model/functions');
const config = require('../config.json');

router.post(
  '/upload/',
  asyncHandler(async (req, res) => {
    const result = await uploadImage(req);
    if (result.code == 200) {
      // TODO: req.get("host") muss ausgetauscht werden mit dem richtigen Pfad wenn man eine custom url angibt
      if (config.path) res.status(result.code).send(config.path + '/' + result.data);
      else res.status(result.code).send(req.get('host') + '/' + result.data);
    } else {
      res.status(result.code).json(result);
    }
  }),
);

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const result = await getImage(req.params.id);
    res.status(result.code).sendFile(result.data);
  }),
);

module.exports = router;
