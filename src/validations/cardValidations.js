import Joi from 'joi';

const cardSchema = Joi.object({
    _id: Joi.string().required(),
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    description: Joi.string().required(),
    phone: Joi.number().required(),
    email: Joi.string().required(),
    web: Joi.string().required(),
    image: Joi.object({
        url: Joi.string().required(),
        alt: Joi.string().required(),
        id: Joi.number().required(),
    }),
    address: Joi.object({
        state: Joi.string().required(),
        country: Joi.string().required(),
        city: Joi.string().required(),
        street: Joi.string().required(),
        houseNumber: Joi.number().required(),
        zip: Joi.number().required(),
        _id: Joi.number().required(),
    }),
    createdAt: Joi.number().required(),
    user_id: Joi.string().required(),
    likes: Joi.string().items(Joi.string()),
    __v: Joi.number().required(),

})


export default cardSchema;