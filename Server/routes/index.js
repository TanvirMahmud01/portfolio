let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About page. */
router.get('/about', indexController.displayAboutPage);

/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/* GET Resume page. */
router.get('/resume', indexController.displayResumePage);

/* GET Route for displaying Login Page*/
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing Login page */

router.post('/login', indexController.processLoginPage);

/* GET Route for displaying Register Page*/
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing Register page */

router.post('/register', indexController.processRegisterPage);

/* GET Route to perform user Logout */

router.get('/logout', indexController.performLogout);

module.exports = router;
