'use strict';

const {WebhookVerified} = require('jovo-framework');
const {app} = require('./app.js');

// =================================================================================
// Server Configuration
// =================================================================================

if (app.isWebhook()) {
    const port = process.env.PORT || 3000;
    WebhookVerified.listen(port, () => {
        console.log(`Example server listening on port ${port}!`);
    });
    WebhookVerified.post('/webhook', (req, res) => {
        app.handleWebhook(req, res);
    });
}

exports.handler = (event, context, callback) => {
    app.handleLambda(event, context, callback);
};
