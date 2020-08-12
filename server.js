const cds = require('@sap/cds');
const helmet = require('helmet');

cds.on('boostrap', (app) => {
    app.use(helmet());
});
module.exports = cds.server;