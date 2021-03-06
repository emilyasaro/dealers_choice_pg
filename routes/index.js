const router = require('express').Router();
// const { client } = require('../db/seed.js');
const recipesRouter = require('./recipes');
const monthRouter = require('./months')

router.use('/recipes', recipesRouter);
router.use('/months', monthRouter);


module.exports = router;


//sale belongs to user >> recipe belongs to month
