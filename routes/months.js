const monthRouter = require('express').Router();
const { client } = require('../db/seed.js');

monthRouter.get('/months', async (req, res, next) => {
  try {
    const response = await client.query('SELECT * FROM "Month";');
    res.send(response.rows);
  }
  catch (error) {
    next(error)
  }
})


module.exports = monthRouter;
