const express = require('express')
const cds = require('@sap/cds')

//==========================================
// Create app
//==========================================
const app = express();

// Define port variable
const port = process.env.PORT || 3000;

//init db
cds.connect.to('db')
    .then(srv =>{
        // Delete all existing posts in table
        var query = DELETE.from('masterdata.PartnerTypes')
        srv.run(query).then(console.log)
        // Insert initial values for the table
        query = INSERT
                    .into('masterdata.PartnerTypes')
                    .columns(['ID', 'type', 'description'])
                    .values(['1', '0001', 'Person'])
        srv.run(query).then(console.log)
        query = INSERT
                    .into('masterdata.PartnerTypes')
                    .columns(['ID', 'type', 'description'])
                    .values(['2', '0002', 'Legal Entity'])
        srv.run(query).then(console.log)
        query = INSERT
                    .into('masterdata.PartnerTypes')
                    .columns(['ID', 'type', 'description'])
                    .values(['3', '0003', 'Simple Company'])
        srv.run(query).then(console.log)
        query = INSERT
                    .into('masterdata.PartnerTypes')
                    .columns(['ID', 'type', 'description'])
                    .values(['4', '0004', 'One Man Business'])
        srv.run(query).then(console.log)
    })
    .catch(console.error)
// Start the server
app.listen(port, console.log(`listing on port ${port}`))