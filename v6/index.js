const express = require('express');
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', async (req, res) => {
  console.info(`checking request body: ${JSON.stringify(req.body)}`);
  await check('greetings').notEmpty().run(req);

  const validationResults = await validationResult(req);
  console.info(
    `validation results: ${JSON.stringify(
      validationResults
    )}, is empty? ${validationResults.isEmpty()}`
  );

  if (validationResults.isEmpty()) {
    await check('greetings').trim().escape().run(req);
    res.send(`checking done, hello: ${req.body['greetings']}`);
  } else {
    res.send(
      `checking done, error: ${JSON.stringify(validationResults.array())}`
    );
  }
});

if (module === require.main) {
  const port = 3000;
  app.listen(port, err => {
    if (err) {
      throw err;
    }
    console.info(`server listening at ${port}`);
  });
}
