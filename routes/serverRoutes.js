const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { uploadImage } = require('../model/functions');

router.post(
  '/upload/',
  asyncHandler(async (req, res) => {
    const result = await uploadImage(req);
    if (result.code == 200) res.status(result.code).send(req.get('host') + '/' + result.data);
    else {
      res.status(result.code).json(result);
    }
  }),
);

module.exports = router;
