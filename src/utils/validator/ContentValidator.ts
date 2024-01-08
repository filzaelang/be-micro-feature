import * as Joi from "joi"

export const createArticleSchema = Joi.object({
    title: Joi.string().min(10).max(250).required(),   //allow(null)
    article: Joi.string().min(10).required(),
    image: Joi.string().allow(null),
    date: Joi.date().allow(null)
})

export const updateArticleSchema = Joi.object({
    title: Joi.string().min(10).max(250).allow(null),
    author: Joi.string().max(30).allow(null),
    article: Joi.string().min(10).allow(null),
    image: Joi.string().allow(null),
    date: Joi.date().allow(null)
})

export const createPaslonSchema = Joi.object({
    name: Joi.string().required(),
    noUrut: Joi.number().required(),
    visiMisi: Joi.string().min(10).required(),
    image: Joi.string().allow(null)
})

export const createPartaiSchema = Joi.object({
    name: Joi.string().required(),
    ketuaUmum: Joi.string().required(),
    visiMisi: Joi.string().min(10).required(),
    alamat: Joi.string().required(),
    image: Joi.string().allow(null)
})

export const updatePartaiSchema = Joi.object({
    name: Joi.string().required().allow(null),
    ketuaUmum: Joi.string().required().allow(null),
    visiMisi: Joi.string().min(10).allow(null),
    alamat: Joi.string().allow(null),
    image: Joi.string().allow(null)
})

