namespace masterdata;

using {cuid} from '@sap/cds/common';


type Contact {
    phoneNumber : String(40);
    mobilNumber : String(40);
    email       : String(100);
}

entity Partners : cuid {
    name1   : String;
    name2   : String;
    name3   : String;
    address : Association to Addesses;
    type    : Association to PartnerTypes;
}

entity Addesses : cuid {
    address1 : String;
    address2 : String;
    address3 : String;
    country  : String(20);
    city     : String(20);
    postcode : String(5);
    partners : Association to many Partners
                   on partners.address = $self;
}

entity PartnerTypes {
    key ID          : Integer;
        type        : String(3);
        description : String(255);
}
