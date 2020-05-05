/**
 * create test data.
 */
async function doCreate() {

    let {
        data: {
            value
        }
    } = await axios.get('/master-data-services/PartnerTypes');

    let personTypes = value;

    console.log(`rows fetched from partner type : ${personTypes.length}`);

    axios
        .post('/master-data-services/Addresses', {
            address1: "Geijersgatan 16",
            country: "Sverige",
            city: "Västerås",
            postcode: "72335"
        })
        .then(response =>
            axios
            .post('/person/Persons', {
                partner: {
                    name1: "Charbel",
                    name2: "Kisso",
                    address_ID: response.data.ID,
                    type_ID: personTypes.find(x => x.description === 'Person').ID
                },
                personalNumber: "198802105356",
                birthDate: "1988-02-10",
                contactInfo_mobilNumber: "+46733642133",
                contactInfo_email: "charbelkisso@gmail.com"
            })
            .catch(console.log)
        )
        .catch(console.log)
}