import * as Joi from "joi"

export const registerSchema = Joi.object({
    fullname: Joi.string().required(),
    alamat: Joi.string().required(),
    jenisKelamin: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    age: Joi.number().required()
})

export const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})