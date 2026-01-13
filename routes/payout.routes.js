// routes/payout.routes.js

const express = require('express');
const auth = require('../middlewares/auth.middleware.js');
const rateLimit = require('../middlewares/rateLimit.middleware.js');
const validate = require('../middlewares/validate.middleware.js');
const logger = require('../middlewares/logger.middleware.js');
const controller = require('../controllers/payout.controller.js');

const router = express.Router();

router.post(
  '/initiate',
  logger,
  rateLimit,
  auth,
  validate,
  controller.initiate
);

module.exports = router;
