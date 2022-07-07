import Joi from 'joi';

export const schema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().alphanum().min(6).required(),
    age: Joi.number().integer().min(4).max(130).required()
});
