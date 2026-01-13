// middlewares/validate.middleware.js
const Joi = require("joi");
//use joi
// const ValidatePayout = Joi.object({

// })

module.exports = function validate(req, res, next) {
  // const { amount, clientReqId, beneficiary } = req.body;
  // if (!amount || !clientReqId || !beneficiary) {
  //   return res.status(400).json({ error: 'Invalid request' });
  // }
  next();
};
