const express = require('express');
const mainController = require('../controllers/mainController');
const path = require('path')
const fileDestination = path.join('public','uploads')
const middle = require('../controllers/middle');

const loginController = require('../controllers/loginControlller');
const otpController = require('../controllers/otpController');
const router = express.Router();
const app = express();

const multer = require('multer');
const upload = multer({
    dest: fileDestination
})


router.route('/').get(middle.redirectLogin,middle.localsAccess, mainController.home,);
router.route('/doctor').get(middle.redirectLogin, mainController.doctor);
router.route('/hospital').get(middle.redirectLogin, mainController.hospital);
router.route('/aboutUs').get(middle.redirectLogin, mainController.aboutUs);
router.route('/appointment').get(middle.redirectLogin, mainController.appointment);
router.route('/treatment').get(middle.redirectLogin, mainController.treatment);
router.route('/login').get( mainController.login);
router.route('/signup').get( mainController.signup);
router.route('/appointment').get(middle.redirectLogin, mainController.appointment);

router.route('/signup').post(loginController.signup);
router.route('/login').post(loginController.login);

router.route('/contactus').get(middle.redirectLogin, mainController.contactus);
router.route('/doctorProfile').get(middle.redirectLogin, mainController.doctorProfile);
router.route('/faq').get(middle.redirectLogin, mainController.faq);
router.route('/hospitalProfile').get(middle.redirectLogin, mainController.hospitalProfile);
router.route('/query').get(middle.redirectLogin, mainController.query);
router.route('/tvastraPlus').get(middle.redirectLogin, mainController.tvastraPlus);
// router.route('/otp').post(otpController.otp);
// router.route('/otp').get(mainController.otp);
router.route('/otpVerify').post(otpController.otpVerify);
router.route('/otpVerify').get( mainController.otpVerify);
router.route('/phoneLogin').get( mainController.phoneLogin);
router.route('/logout').get(loginController.logout);
router.route('/profile').get(middle.redirectLogin, mainController.profile);
router.route('/profile').post(middle.redirectLogin, upload.single('avtar'),loginController.profile);
router.route('/addDoctorDetails').get(middle.redirectLogin, mainController.addDoctorDetails);
router.route('/registerDoctor').post(loginController.registerDoctor);
router.route('/resetPassword').post(loginController.resetPassword);
router.route('/resetPassword').get(mainController.resetPassword);
router.route('/beforeResetPassword').post(loginController.beforeResetPassword);
router.route('/phoneLogin').post(otpController.otp);



module.exports = router;