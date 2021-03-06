const monthRouter = require('express').Router();
const { client } = require('../db/seed.js');

monthRouter.get('/', async (req, res, next) => {
  try {
    console.log('testing')
    const response = await client.query('SELECT * FROM "Month";');
    res.send(response.rows);
  }
  catch (error) {
    next(error)
  }
})

monthRouter.get('/:id/recipes', async (req, res, next) => {
  try {
    let recipe = await client.query('SELECT * FROM "Ice Cream" WHERE month_id=$1;', [req.params.id]);
    res.send(recipe.rows);
  }
  catch (error) {
    next('there was an error on your recipes GET route!',error)
  }
})

module.exports = monthRouter;
