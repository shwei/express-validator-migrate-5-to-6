const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

app.post('/', (req, res) => {
  console.info(`checking request body: ${JSON.stringify(req.body)}`);
  req.checkBody('greetings').isLength({min: 1});

  const validationResults = req.validationErrors();
  console.info(`validation results: ${JSON.stringify(validationResults)}`);

  if (!validationResults || validationResults.length < 1) {
    req.sanitizeBody('greetings').escape().trim();
    res.send(`checking done, hello: ${req.body['greetings']}`);
  } else {
    res.send(`checking done, error: ${JSON.stringify(validationResults)}`);
  }
});

app.listen(3000, () => {
  console.info('app listening at port 3000');
});
