
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


}
