const { Router } = require('express');
const asyncRoute = require('../middlewares/asyncRoute');
const { examplePostSchema } = require('../schemas/examples');
const validator = require('../middlewares/requestValidator');
const { errors } = require('../helpers/Errors');

const webhookRouter = new Router();

webhookRouter.get('/', (req, res) => res.send({ "key": "webhook" }));


webhookRouter.post('/', (request, response) => {
    const tag = request.body.fulfillmentInfo.tag;
    let text = 'Webhook text';
    console.log("request----", request.body);
    console.log("------end req");
    if (tag === 'Default Welcome Intent') {
        text = 'Hello from a GCF Webhook';
    } else if (tag === 'get-name') {
        text = 'My name is Flowhook';
    } else {
        text = `There are no fulfillment responses defined for "${tag}"" tag`;
    }

    const jsonResponse = {
        fulfillment_response: {
            messages: [
                {
                    text: {
                        //fulfillment text response to be sent to the agent
                        text: [text],
                    },
                },
            ],
        },
    };

    response.send(jsonResponse);
},
);



module.exports = webhookRouter;
