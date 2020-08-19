const express = require('express');
const router = express.Router();

router.get('/fruit', (request, response) => {
  let output = {
    type: request.query.type || 'unknown',
  };
  response.status(200).json(output);
});

router.get('/fruit/apple', (request, response) => {
  response.status(200).send('I like apples, but not as much as I like oranges!');
});

router.get('/fruit/:type', (request, response) => {
  let output = {
    type: request.params.type,
  };
  response.status(200).json(output);
});



//body is coming back as undefined
router.post('/fruit', (request, response) => {
  console.log('What got added?', request.body);
  response.status(201).send('ok');
});

router.get('/fruit-browser', (request, response) => {
  console.log('browser = ', request.browser);
  response.status(200).send('ok');
});






module.exports = router;