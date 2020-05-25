
function home(req, res){
    res.render('index');
}
function doctor(req, res){
    res.render('doctor');
}
function hospital(req, res){
    res.render('hospital');
}
function aboutUs(req, res){
    res.render('aboutUs');
}
function appointment(req, res){
    res.render('appointment');
}

function treatment(req, res){
    res.render('treatment');
}

function login(req, res){
    res.render('login');
}

function appointment(req, res){
    res.render('appointment');
}

function signup(req, res){
    res.render('signup');
}

function contactus(req, res){
    res.render('contactus');
}

function doctorProfile(req, res){
    res.render('doctorProfile');
}

function faq(req, res){
    res.render('faq');
}

function doctorProfile(req, res){
    res.render('doctorProfile');
}

function hospitalProfile(req, res){
    res.render('hospitalProfile');
}

function query(req, res){
    res.render('query');
}

function tvastraPlus(req, res){
    res.render('tvastraPlus');
}

function otpVerify(req,res){
    res.render('otpVerify');
}

function phoneLogin(req, res){
    res.render('phoneLogin');
}


module.exports = {
    home: home,
    doctor: doctor,
    hospital: hospital,
    aboutUs: aboutUs,
    appointment: appointment,
    treatment: treatment,
    login: login,
    appointment: appointment,
    signup: signup,
    contactus: contactus,
    doctorProfile: doctorProfile,
    faq: faq,
    hospitalProfile: hospitalProfile,
    query: query,
    tvastraPlus: tvastraPlus,
    otpVerify: otpVerify,
    phoneLogin: phoneLogin
}