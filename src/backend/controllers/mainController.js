
function home(req, res){
    res.render('index', {success: req.flash('success')});
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
    res.render('login', {error: req.flash('error')});
}

function appointment(req, res){
    res.render('appointment');
}

function signup(req, res){
    res.render('signup', {error: req.flash('error')});
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
    res.render('otpVerify', {error: req.flash('error'),info: req.flash('info')});
}

function phoneLogin(req, res){
    res.render('phoneLogin');
}

function profile(req, res){
    res.render('profile');
}

function addDoctorDetails(req, res){
    res.render('addDoctorDetails');
}

function resetPassword(req, res){
    res.render('resetPassword');
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
    phoneLogin: phoneLogin,
    profile: profile,
    addDoctorDetails: addDoctorDetails,
    resetPassword: resetPassword
}