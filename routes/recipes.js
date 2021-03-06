const recipesRouter = require('express').Router();
const { client } = require('../db/seed.js');

recipesRouter.get('/:id', async (req, res, next) => {
  try {
    const response = await client.query('SELECT recipe FROM "Ice Cream" WHERE id =$1;', [req.params.id]);
    res.send(response.rows);
  }
  catch (error) {
    next(error)
  }
})

module.exports = recipesRouter;
