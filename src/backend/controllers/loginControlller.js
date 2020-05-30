var dbConn = require('../database/mongoose');
var User = require('../database/schema');
var mainController = require('./mainController');
// var otpController = require('otpController');


module.exports ={
    signup: signup,
    login: login,
    logout: logout,
    profile: profile,
    registerDoctor: registerDoctor,
    // phoneLogin: phoneLogin
    beforeResetPassword: beforeResetPassword,
    resetPassword: resetPassword
};

async function signup(req, res){
    req.session.error = null;
    var msg = '';
    const {name, email, password, gender,dob, phone, city, state, country} = req.body;
    if(!(name, email, password, gender, phone, city, state, country)){
        console.log("enter all teh details");
        return res.render('signup', {
            msg: "enter all the required details"
        });
    }
    else{
        try{
            const userCheck = await User.findOne({
                email: email
            });
            if(userCheck === null){
                User.create({
                    name: name,
                    email: email,
                    password: password,
                    gender: gender,
                    dob: dob,
                    phone: phone,
                    city: city,
                    state: state,
                    country: country
                },function(err, newUser){
                    if(err  ){
                        msg = 'Error loading data';
                        console.log(msg); 
                        
                        return res.render('signup',{msg:msg});
                    }else{
                        req.session.user = newUser;
                        return res.redirect('/');
                    }
                })

            }else{
                msg = "Eamil already taken";
                console.log(msg)
                return res.render('signup',{msg:msg})
            }
        }catch{
            msg= 'Some error please try againg in some time';
            console.log(msg)
            return res.render('signup', {msg:msg});
        }
    }
}


async function login(req, res){
    req.session.error = null;
    var msg = '';
    const {email, password} = req.body;
    if(!email || !password){
        msg = "Enter all the details";
        console.log(msg);
        req.session.error = msg;
        return res.redirect('/login');
    }else{
        try{
            const user =await User.findOne({
                email: email
            });
            if(user === null){
                msg = "Email not found";
                console.log(msg);
                req.session.error = msg;
                return res.redirect('/login');
            }else{
                if(user.password !== password){
                    msg = 'Password not match';
                    console.log(msg);
                    req.session.error = msg;
                    return res.redirect('/login');
                }else{
                    msg= 'welocm'
                    console.log(msg);
                    req.session.user = user;
                    console.log(req.session.user);
                    req.session.success = msg;
                    return res.redirect('/');
                }
            }
        }catch{
            msg= 'some error occured, please try agian in some time';
            console.log(msg);
            return res.render('login',{msg: msg});
        }
    }
}

function logout(req, res){
    req.session.destroy(err=>{
        console.log(err);
    })
    return res.redirect('login');
}

async function profile(req, res){
    if(req.file !== null){
        console.log('hello')
        User.avtar = req.file;
        // User.save();

    }
    return res.redirect('/profile')

}

async function registerDoctor(req, res){
    req.session.error = null;
    var msg = '';
    const {name, email, password, gender,dob, phone, city, state, country} = req.body;
    if(!(name, email, password, gender, phone, city, state, country)){
        console.log("enter all teh details");
        return res.render('signup', {
            msg: "enter all the required details"
        });
    }
    else{
        try{
            const userCheck = await User.findOne({
                email: email
            });
            if(userCheck === null){
                User.create({
                    name: name,
                    email: email,
                    password: password,
                    gender: gender,
                    dob: dob,
                    phone: phone,
                    city: city,
                    state: state,
                    country: country
                },function(err, newUser){
                    if(err  ){
                        msg = 'Error loading data';
                        console.log(msg); 
                        
                        return res.render('signup',{msg:msg});
                    }else{
                        req.session.user = newUser;
                        return res.redirect('/addDoctorDetails');
                    }
                })

            }else{
                msg = "Eamil already taken";
                console.log(msg)
                return res.render('signup',{msg:msg})
            }
        }catch{
            msg= 'Some error please try againg in some time';
            console.log(msg)
            return res.render('signup', {msg:msg});
        }
    }
}

async function beforeResetPassword(req, res){
    req.session.error = null;
    var msg = '';
    const email = req.body.email;
    if(!email){
        msg = "Enter all the details";
        console.log(msg);
        req.session.error = msg;
        return res.redirect('/login');
    }else{
        try{
            const user =await User.findOne({
                email: email
            });
            if(user === null){
                msg = "Email not found";
                console.log(msg);
                req.session.error = msg;
                return res.redirect('/login');
            }else{
                req.session.user = user;
                console.log(user);
                console.log('hello i am a s');
                return res.redirect('/resetPassword');
            }
        }catch{
            msg= 'some error occured, please try agian in some time';
            console.log(msg);
            return res.redirect('/login');
        }
    }
}

async function resetPassword(req, res){
    const password = req.body.password;
    const confirm = req.body.checkPassword;
    if(!password || !confirm){
        msg = 'enter all details';
        req.session.error = msg;
        return res.redirect('/resetPassword');
    }else{
        // console.log(req.session.user.email);
        if(password !== confirm){
            msg = 'password must match the confirm';
            req.session.error = msg;
            return res.redirect('/resetPassword');
        }else{
            try{
                const user =await User.findOne({
                    email: req.session.user.email
                });
                if(user !== null){
                    user.password = password;
                    (await user).save();
                    res.redirect('/');
                }
            }catch{
                res.redirect("/login");
            }
        }
    }
}

