const axios = require('axios');

module.exports = (srv) => {
    srv.before('CREATE', 'PartnerIDs', (req) => {
        console.log(req);
    });

    srv.before('CREATE', 'Partners', async (req) => {

        const baseURL = "https://pnr-check-terrific-quoll-le.cfapps.eu10.hana.ondemand.com/pnrcheck/";

        var reqUrl = baseURL + req.data.idNumber.idNumber;
        var response = await axios.get(reqUrl);
        if (response.data.status === 'Invalid')
            req.reject('Invalid Personl Number');
    })
}