const recipesRouter = require('express').Router();
const { client } = require('../db/seed.js');

recipesRouter.get('/recipes', async (req, res, next) => {
  try {
    // let recipe = await client.query('SELECT * FROM "Ice Cream" WHERE id =$1;', [req.params.id]);
    let recipe = await client.query('SELECT * FROM "Ice Cream";')
    // recipe = recipe.rows[0];
    res.send(recipe);
  }
  catch (error) {
    next(error)
  }
})

module.exports = recipesRouter;
