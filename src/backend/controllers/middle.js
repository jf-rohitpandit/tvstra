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

module.exports ={
    redirectLogin: redirectLogin,
    localsAccess: localsAccess
}