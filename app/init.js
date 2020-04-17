


axios
    .get('/master-data-services/PartnerTypes')
    .then(res => new Promise( resolve => {
      resolve(res)  
    })).then(console.log)