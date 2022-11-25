const joi = require("joi");
const promise = require("bluebird")
const joiValidator = require("../../utils/joiValidator")
const DB = require("../../utils/db")

class userAuthValidator {
    async validateSignupForm(body){
        try{
            let schema = joi.object().keys({
                first_name:joi.string().required(),
                last_name:joi.string().required(),
                email:joi.string().email().required(),
                password:joi.string().min(8).required(),
                gender:joi.number().integer().optional(),
                role:joi.number().integer().required(),
                mobile_number:joi.number().integer().min(10).required(),
                business:joi.string().optional(),
                duration:joi.string().optional(),
                opening_time:joi.number().integer().optional(),
                closing_time:joi.number().integer().optional(),
                created_at:joi.date().required(),
                updated_at:joi.date().required(),
                is_status:joi.string().required()
            })
            await joiValidator.validateJoiSchema(body,schema)
        }catch(error){
            return promise.reject(error)
        }
    }

}  
module.exports = new userAuthValidator();