const { Router } = require('express');
const asyncRoute = require('../middlewares/asyncRoute');
const { examplePostSchema } = require('../schemas/examples');
const validator = require('../middlewares/requestValidator');
const { errors } = require('../helpers/Errors');

const exampleRouter = new Router();

exampleRouter.get('/', (req, res) => res.send({"key":"val"}));

exampleRouter.get('/not-ok-example', () => {
  throw errors.forbidden();
});

exampleRouter.post(
  '/validation-route',
  validator(examplePostSchema),
  (req, res) => {
    return res.send(
      'If you see this, you called this endpoint with correct data :)',
    );
  },
);

exampleRouter.get(
  '/async-route',
  asyncRoute(async (req, res) => {
    await 1;
    return res.send('async routes works like this');
  }),
);

exampleRouter.get(
  '/async-route-error',
  asyncRoute(async () => {
    await 1;
    throw errors.unauthorized();
  }),
);

module.exports = exampleRouter;
