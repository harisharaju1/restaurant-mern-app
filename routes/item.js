const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item');
const { authenticateJWT } = require('../middleware/authenticator');

router.post('/', authenticateJWT, itemController.create);

module.exports = router;