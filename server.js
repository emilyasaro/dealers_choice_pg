// KB Creamery
// flavors of the month in a list on the main page
// click to see the two flavors
// click on the flavor to go to the ingredients/product description

const { client, syncAndSeed } = require('./db/seed');
const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express(morgan);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', require('./routes/index'));
// app.get('/', async (req, res, next) => {
//   try {
//     const response = await client.query('SELECT * FROM "Month";');
//     res.send(response.rows);
//   }
//   catch (error) {
//     console.log(error)
//   }
// })

const PORT = 3000;

const init = async () => {
  try {
  await client.connect();
  await syncAndSeed();

  app.listen(PORT, () => {`App listening on port ${PORT}.`});
  }
  catch(err) {
    console.log(err);
  }
}
init();

// module.exports = app;
