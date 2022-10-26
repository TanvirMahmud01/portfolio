let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bookController = require('../controllers/book');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* Get Route for the Book List page - READ operation */
router.get('/',  bookController.displayBookList);


/* GET Route for displaying ADD page - CREATE Operation */
router.get('/add', requireAuth, bookController.displayAddPage);

/* POST Route for processing ADD page - CREATE Operation */

router.post('/add', requireAuth, bookController.processAddPage);

/* GET Route for displaying Edit page - UPDATE Operation */

router.get('/edit/:id', requireAuth, bookController.displayEditPage);

/* POST Route for processing Edit page - UPDATE Operation */

router.post('/edit/:id', requireAuth, bookController.processEditPage);

/* GET Route to perform Deletion - DELETE Operation */

router.get('/delete/:id', requireAuth, bookController.performDelete);

module.exports = router;