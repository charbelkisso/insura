using { masterdata } from '../db/index';

service MasterDataServices {
    @readonly entity Partners as projection on masterdata.Partners;
    entity PartnerTypes as projection on masterdata.PartnerTypes;
    entity Addresses as projection on masterdata.Addesses;
}
