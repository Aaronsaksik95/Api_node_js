const Joi = require('joi');

async function validateCreateUser(req, res, next){
    const schema = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email(),
        password: Joi.string().required()
    });

    const validation = schema.validate(req.body)
    if(validation.error){
        res.send({
            error: validation.error
        })
    }
    next();
    
}

module.exports = validateCreateUser;