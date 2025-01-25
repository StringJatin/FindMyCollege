import Joi from 'joi';

const collegeSchema = Joi.object({
  name: Joi.string().required(),
  location: Joi.string().required(),
  state: Joi.string().required(),
  instituteType: Joi.string().required(),
  imageUrl: Joi.string().uri(),
  logo: Joi.string().uri().optional(),
  website: Joi.string().uri(),
  entranceTest: Joi.string().optional(),
  rank: Joi.number().integer().optional(),
  rating: Joi.number().optional(),
  description: Joi.string().optional(),
  cost: Joi.number().optional(),
  faqs: Joi.array().optional(),
  tab_description: Joi.string().optional(),
  campus_life: Joi.string().optional(),
  degrees: Joi.array().items(Joi.object()).optional(),
});

export const validateCollege = (req, res, next) => {
  const { error } = collegeSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};
