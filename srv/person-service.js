module.exports = async (srv) => {
    const cds = await require('@sap/cds').connect('db')    
    const PartnerTypes = cds.entities['masterdata.PartnerTypes']
    const res = await cds.run(SELECT.from(PartnerTypes))
}