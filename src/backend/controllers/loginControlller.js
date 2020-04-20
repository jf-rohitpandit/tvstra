var dbConn = require('../database/mongoose');
var User = require('../database/schema');
var mainController = require('./mainController');

module.exports ={
    signup: signup
};

// function isValidPhone(phone){

// }

function signup(req, res){
    const {name, email, password, gender,dob, phone, city, state, country} = req.body;
    if(!(name, email, password, gender, phone, city, state, country)){
        return res.render('signup', {
            msg: "enter all the required details"
        });
    }
    else{
        var newUser = User({
        name : name,
        email : email,
        password : password,
        gender : gender,
        dob: dob,
        phone : phone,
        city : city,
        state : state,
        country : country
        });



        newUser.save((err,user)=>{
            if(err){
                console.log(err);
            }else{
                console.log(user);
                req.session.name = user.name;
                req.session.email = user.email;
                req.session.password = user.password;
                req.session.gender = user.gender;
                req.session.dob = user.dob;
                req.session.phone = user.phone;
                req.session.city = user.city;
                req.session.state = user.state;
                req.session.counery = user.counery;
        
                return res.redirect('/');
                
            }
        })
    }

}