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
    res.render('about-us');
}
function appointment(req, res){
    res.render('appointment');
}

function treatment(req, res){
    res.render('treatment');
}





module.exports = {
    home: home,
    doctor: doctor,
    hospital: hospital,
    aboutUs: aboutUs,
    appointment: appointment,
    treatment: treatment
}