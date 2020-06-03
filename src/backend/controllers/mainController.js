
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


function profile(req, res){
    res.render('profile',{error: req.flash('error')});
}

function addDoctorDetails(req, res){
    res.render('addDoctorDetails', {error: req.flash('error')});
}

function resetPassword(req, res){
    res.render('resetPassword');
}

function otpVerifyPhone(req, res){
    res.render('otpVerifyPhone');
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
    profile: profile,
    addDoctorDetails: addDoctorDetails,
    resetPassword: resetPassword,
    otpVerifyPhone: otpVerifyPhone
}