const router = require('express').Router();
const { client } = require('../db/seed.js');
const recipesRouter = require('./recipes')

router.get('/month', async (req, res, next) => {
  try {
    const response = await client.query('SELECT * FROM "Month";');
    res.send(response.rows);
  }
  catch (error) {
    next(error)
  }
})

module.exports = { router, recipesRouter };
