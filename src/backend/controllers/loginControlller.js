var dbConn = require('../database/mongoose');
var User = require('../database/schema');
var mainController = require('./mainController');

module.exports ={
    signup: signup,
    login: login,
    logout: logout
};

async function signup(req, res){
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
    var msg = '';
    const {email, password} = req.body;
    if(!email || !password){
        msg = "Enter all the details";
        console.log(msg);
        return res.render('login', {msg: msg});
    }else{
        try{
            const user =await User.findOne({
                email: email
            });
            if(user === null){
                msg = "Email not found";
                console.log(msg);
                return res.render('login', {msg: msg});
            }else{
                if(user.password !== password){
                    msg = 'Password not match';
                    console.log(msg);
                    return res.render('login', {msg: msg});
                }else{
                    msg= 'welocm'
                    console.log(msg);
                    req.session.user = user;
                    console.log(req.session.user);
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
