const DB = require("../../utils/db");
const responseHelper = require('../../utils/responseHelper');//
const config = require('../../utils/config');//
const messages = require('../../utils/messages.json');//
const userAuthValidator = require("../validators/userAuthValidator");//validater
const joi = require("joi");
const codeHelper = require("../../utils/codeHelper");
const bcrypt = require("bcrypt");//use for encrypt password
const saltRounds = 10;
const { v4: uuidv4 } = require('uuid');//


class userAuth{
    async signup(req, res){
        try {            
            console.log("SignUp Req ::: ", req.body);
            await userAuthValidator.validateSignupForm(req.body)
            if(req.body.email){
                await userAuthValidator.isUserWithEmailExist(req.body, true)
            }
            await bcrypt.hash(req.body.password, saltRounds,(err,hash)=>{
                req.body.password = hash;
                req.body.unique_id = uuidv4();
                DB.insert("users", req.body)
            }) 
            responseHelper.success(res, 'SIGNUP_SUCCESS', req.headers.language, req.body)
        } catch (error) {
            console.log(error)
            responseHelper.error(res, error, req.headers.language)
        }
    }
}    
module.exports = new userAuth();