const recipesRouter = require('express').Router();
const { client } = require('../db/seed.js');

recipesRouter.get('/', async (req, res, next) => {
  try {
    let recipe = await client.query('SELECT * FROM "Ice Cream";');
    res.send(recipe.rows);
  }
  catch (error) {
    next(error)
  }
})

module.exports = recipesRouter;
