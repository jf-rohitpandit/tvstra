const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();
const app = express();

router.route('/').get(mainController.home);
router.route('/doctor').get(mainController.doctor);
router.route('/hospital').get(mainController.hospital);
router.route('/aboutUs').get(mainController.aboutUs);
router.route('/appointment').get(mainController.appointment);
router.route('/treatment').get(mainController.treatment);

module.exports = router;