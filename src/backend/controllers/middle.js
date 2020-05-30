var User = require('../database/schema');
var dbConn = require('../database/mongoose');



function redirectLogin(req, res, next){
    if(!req.session.user){
        console.log('in the middleware')
        res.redirect('/login');
    }
    next();
}

function localsAccess(req, res, next){
    if(req.session.user){
        res.locals.user = req.session.user;
    }
    next();
}


async function emailValidate(req,res, next){
    console.log('hello in email validations');
    
}

module.exports ={
    redirectLogin: redirectLogin,
    localsAccess: localsAccess,
    // emailValidate: emailValidate
}