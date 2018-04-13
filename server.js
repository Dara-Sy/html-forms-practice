// import dependencies
const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

// initialize app
const app = express();


app.get('/records', (req, res) => {
  res.send('you need to send me a POST');
});

app.post('/records', (req, res) => {
  res.json(req.body);
});



app.listen(PORT, () => {
  console.log(`Middleware lesson 🆙 on port ${PORT}, in ${app.get('env')}`);
});
