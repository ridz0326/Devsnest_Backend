var express = require('express');
var router = express.Router();
var registerInitialChecks = require('../middlewares/registerInitialChecks');
var {register} = require('../controllers/register')
// var {register, registerSuperAdmin} = require('../controllers/register');


/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = 'ridz';
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next){
  console.log('Redis Value', req.session.username = 'ridz');
  res.render('index', { title: 'Expresss'});
} )


/**
 * @requires { email, firstName, lastName, password, confirmPassword } - req.body
 * @description
 * Security, performance and edge cases
 * LEVEL-1
 * email validate - string
 * password validate - string
 * password == confirmPassword 
 * LEVEL-2
 * JS/SQL Injection -THA
 * LEVEL-3
 * check if email already exists
 * password hash
 * email lowercase 
 * save
 */

router.post('/register', registerInitialChecks, register);
// router.post('/register-super-admin', registerInitialChecks, registerSuperAdmin);


module.exports = router;

