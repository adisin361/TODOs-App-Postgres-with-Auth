const Joi = require('joi');
const checkName = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json(`Error message: ${error}`);
    return;
  }
  next();
}

const checkParams = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required()
  });

  const { error } = schema.validate(req.params);
  if (error) {
    res.status(400).json(`Error message: ${error}`);
    return;
  }
  next();
}

const checkBody = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    isComplete: Joi.boolean()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json(`Error message: ${error}`);
    return;
  }
  next();
}

const checkBodyReq = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().required(),
    isComplete: Joi.boolean().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).json(`Error message: ${error}`);
    return;
  }
  next();
}



module.exports = {
  checkName,
  checkParams,
  checkBody,
  checkBodyReq
}
