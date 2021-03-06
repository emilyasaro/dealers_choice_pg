const { client, syncAndSeed } = require('./db/seed');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const html = require('html-template-tag');

const app = express(morgan);

app.use(morgan('dev'));
app.use(express.static('client'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/dist')));

// This route is intended to render the main/homepage html from public/index.js but
// I'm only seeing the raw/plain text from that file
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '/public/index.html')));

// The below code sends the same html written in public/index.js and renders on the localhost main page
/* app.get('/', (req, res, next) => {
  try {
    res.send(html`
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
      <body>
        <h2> Kettlebell Creamery</h2>
      </body>
      </html>`)
  }
  catch(err) {
    console.log(err)
  }
})*/


// bringing in my routes folder
app.use('/api', require('./routes/index'));


// const port = 3000;
const port = process.env.PORT || 3000;

const init = async () => {
  try {
  await client.connect();
  await syncAndSeed();

  app.listen(port, () => {`App listening on port ${port}.`});
  }
  catch(err) {
    console.log('there was an error starting up!', err);
  }
}
init();

// module.exports = app;
