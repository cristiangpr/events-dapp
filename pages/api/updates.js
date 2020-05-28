import Cors from 'cors'
import initMiddleware from '../../lib/init-middleware'

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  // Run cors
  await cors(req, res)
}
module.exports = function (req, res) {
    console.log('JavaScript HTTP trigger function begun');
    var validationEventType = "Microsoft.EventGrid.SubscriptionValidationEvent";
    
    for (var events in req.body) {
        var body = req.body[events];
        // Deserialize the event data into the appropriate type based on event type
        if (body.data && body.eventType == validationEventType) {
            console.log("Got SubscriptionValidation event data, validation code: " + body.data.validationCode + " topic: " + body.topic);

            // Do any additional validation (as required) and then return back the below response
            var code = body.data.validationCode;
          
            res.status(200).json({body: { "ValidationResponse": code } })
        }
        else if (body.data && body.eventType == "Microsoft.Blockchain.Osaka") {
            var blockchainEventData = body.data;
            var message = JSON.stringify(blockchainEventData);
            console.log("Relaying received blockchain event payload:" + message);
            res.status(200).json({body: "Relaying received blockchain event payload:"});
          
          
          
        }
    }
 
};