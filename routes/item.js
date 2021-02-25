const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item');
const { authenticateJWT } = require('../middleware/authenticator');
const upload = require('../middleware/multer');

router.post('/', authenticateJWT, upload.single('itemImage'), itemController.create);

router.get('/', itemController.readAll);

router.delete('/:itemId', authenticateJWT, itemController.delete);

module.exports = router;