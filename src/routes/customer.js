const express = require('express');
const customerController = require('../controllers/customerController');

const router = express.Router();

router.get('/', customerController.list);

router.post('/add', customerController.saveTask);

router.get('/delete/:id', customerController.deleteTask);

router.get('/edit/:id', customerController.editGet);

router.post('/edit/:id', customerController.editPost);

module.exports = router;
