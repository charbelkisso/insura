using {masterdata} from '../db/index';

service MasterDataServices {
    entity Partners      as projection on masterdata.Partners;
    entity PartnerTypes  as projection on masterdata.PartnerTypes;
    entity Addresses     as projection on masterdata.Addesses;
    entity PartnerIDs    as projection on masterdata.PartnerIDs;
    entity IdTypes       as projection on masterdata.IdTypes;

    @readonly
    define view PartnerAddress as
        select from Partners, Addresses
        {
            key Partners.ID,
                name1 as Name,
                Addresses.city as City,
                Addresses.country as Country
        };
}
