'use strict';

const {WebhookVerified} = require('jovo-framework');
const {app} = require('./app.js');

// =================================================================================
// Server Configuration
// =================================================================================

if (app.isWebhook()) {
    const port = process.env.PORT || 3000;

    WebhookVerified.post('/webhook', (req, res) => {
        app.handleWebhook(req, res);
    });

    WebhookVerified.listen(port, () => {
        console.log(`Example server listening on port ${port}!`);
    });
}

exports.handler = (event, context, callback) => {
    app.handleLambda(event, context, callback);
};
