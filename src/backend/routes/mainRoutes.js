const express = require('express');
const mainController = require('../controllers/mainController');

const loginController = require('../controllers/loginControlller');
const router = express.Router();
const app = express();

router.route('/').get(mainController.home,);
router.route('/doctor').get(mainController.doctor);
router.route('/hospital').get(mainController.hospital);
router.route('/aboutUs').get(mainController.aboutUs);
router.route('/appointment').get(mainController.appointment);
router.route('/treatment').get(mainController.treatment);
router.route('/login').get(mainController.login);
router.route('/signup').get(mainController.signup);
router.route('/appointment').get(mainController.appointment);
router.route('/signup').post(loginController.signup);
router.route('/contactus').get(mainController.contactus);
router.route('/doctorProfile').get(mainController.doctorProfile);
router.route('/faq').get(mainController.faq);
router.route('/hospitalProfile').get(mainController.hospitalProfile);
router.route('/query').get(mainController.query);
router.route('/tvastraPlus').get(mainController.tvastraPlus);


module.exports = router;