const router = require('express').Router();
const { client } = require('../db/seed.js');
const recipesRouter = require('./recipes');
const monthRouter = require('./months')

router.use('/recipes', recipesRouter);
router.use('/month', monthRouter);
// router.get('/months', async (req, res, next) => {
//   try {
//     const response = await client.query('SELECT * FROM "Month";');
//     res.send(response.rows);
//   }
//   catch (error) {
//     next(error)
//   }
// })

module.exports = router;
