module.exports = (srv) => {
    srv.before('CREATE', 'PartnerIDs', (req) => {
        console.log(req);
    });

    srv.before('CREATE', 'Partners', (req)=>{
        console.log(req.data.idNumber.idNumber);
    })
}