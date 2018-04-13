// import dependencies
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');

// initialize app
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;


app.get('/records', (req, res) => {
  res.send('you need to send me a POST');
});

app.post('/records', (req, res) => {
  res.json(req.body);
});



app.listen(PORT, () => {
  console.log(`Middleware lesson 🆙 on port ${PORT}, in ${app.get('env')}`);
});
