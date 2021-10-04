const {emailValidation, passwordValidation} = require('../Utils/Validate')
/**
 * 
 * @description
 * email validate - string
 * password validate - string
 * password == confirmPassword 
 */

const registerInitialChecks = (req, res, next) => {
    const {email, password, confirmPassword} = req.body
    console.log("check")
    if (
        typeof email === 'string'  &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        email.length > 0 &&
        password.length > 8 &&
        confirmPassword === password 
        // emailValidation(email) 
        // passwordValidation(password)
    ) {
        next()
    }
    else {
        res.status(401).send("Intial checks fail");
    }
}

module.exports = registerInitialChecks;