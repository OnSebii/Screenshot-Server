const express = require('express');
const router = express.Router();

const { getFruit, getFruits, delFruit, delFruits, addFruit, updateFruit, patchFruit } = require('../model/fruits');

router.get('/fruits', (req, res) => res.status(200).json(getFruits(req.query)));
router.get('/fruits/:id', (req, res) => res.status(200).json(getFruit(req.params.id)));
router.delete('/fruits', (req, res) => res.status(200).json(delFruits()));
router.delete('/fruits/:id', (req, res) => res.status(200).json(delFruit(req.params.id)));
router.post('/fruits', (req, res) => res.status(200).json(addFruit(req.body.fruit)));
router.put('/fruits/:id', (req, res) => res.status(200).json(updateFruit(req.params.id, req.body.fruit)));
router.patch('/fruits/:id', (req, res) => res.status(200).json(patchFruit(req.params.id, req.body.fruit)));
module.exports = router;
