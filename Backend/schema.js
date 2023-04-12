const Joi = require("joi");

const packageSchema = Joi.object({
  name: Joi.string().required(),
  img: Joi.string().required(),
  price: Joi.number().min(0).required(),
  desc: Joi.string().required(),
});

const reviewScheama = Joi.object({
  rating: Joi.number().min(0).max(5),
  comment: Joi.string().required(),
});

module.exports = { packageSchema, reviewScheama };
