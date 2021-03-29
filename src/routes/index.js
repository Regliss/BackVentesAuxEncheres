const express = require('express');
const router = express.Router();
const userRouter = require('./users.route');
const productRouter = require('./products.route');
const categoryRouter = require('./categoryz.route');


router.use(userRouter);
router.use(productRouter);
router.use(categoryRouter);

module.exports = router;