const router = require('express').Router();
const { client } = require('../db/seed.js');
// const recipesRouter = require('./recipes');
// const monthRouter = require('./months')

// router.use('/recipes', require('./recipes'));
// router.use('/months', monthRouter);
router.get('/months', async (req, res, next) => {
  try {
    const response = await client.query('SELECT * FROM "Month";');
    res.send(response.rows);
  }
  catch (error) {
    next('there was an error on your months GET route!', error)
  }
})

router.get('/recipes', async (req, res, next) => {
  try {
    let recipes = await client.query('SELECT * FROM "Ice Cream";');
    res.send(recipes);
  }
  catch (error) {
    next('there was an error on your recipes GET route!',error)
  }
})

router.get('/months/:id/recipes', async (req, res, next) => {
  try {
    let recipe = await client.query('SELECT * FROM "Ice Cream" WHERE month_id=$1;', [req.params.id]);
    res.send(recipe.rows);
  }
  catch (error) {
    next('there was an error on your recipes GET route!',error)
  }
})




module.exports = router;


//sale belongs to user >> recipe belongs to month
