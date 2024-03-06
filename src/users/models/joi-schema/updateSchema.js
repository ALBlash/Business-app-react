import Joi from "joi";

const urlRegex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

const updateSchema = {
    first: Joi.string().min(2).max(250).required(),

    last: Joi.string().min(2).max(250).required(),

    middle: Joi.string().min(2).max(250).allow(''),

    phone: Joi.string()
        .ruleset
        .pattern(/(?:\+972|0)([5][0-9])([0-9]{7})/
        )
        .rule({
            message: "Please enter a valid phone number"
        })
        .required(),

    imageUrl: Joi.string()
        .ruleset.regex(urlRegex)
        .rule({ message: 'card.image "url" mast be a valid url' }),
    imageAlt: Joi.string().min(2).max(250).allow(""),

    state: Joi.string().allow(""),
    country: Joi.string().min(2).max(250).required(),
    city: Joi.string().min(2).max(250).required(),
    street: Joi.string().min(2).max(250).required(),
    houseNumber: Joi.number().required(),
    zip: Joi.number(),
}
export default updateSchema;