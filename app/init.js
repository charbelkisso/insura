


axios
    .get('/master-data-services/PartnerTypes')
    .then(res => new Promise( resolve => {
      resolve(res)  
    })).then(console.log)


axios
    .get('/master-data-services')
    .then(console.log);