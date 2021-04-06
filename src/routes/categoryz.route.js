const express = require('express');
const router = express.Router();
const category = require('../controllers/categoryz.controller');

router.post('/categoryz', category.create);
router.get('/categoryz/:id', category.getCategory);
router.get('/categoryz/', category.getCategoryz);
router.post('/categoryz/edit/:id', category.update);
router.get('/categoryz/delete/:id', category.removeOne);

module.exports = router;