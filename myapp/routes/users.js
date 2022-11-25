var express = require('express');
var router = express.Router();
const userAuth = require("../api/v1/controllers/userAuthController");
const HeaderValidator = require("../api/utils/headersValidator");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// User Registration Record
router.post('/signup', HeaderValidator.nonAuthValidation, userAuth.signup);



module.exports = router;
