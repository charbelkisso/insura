namespace masterdata;

using {
    cuid,
    managed
} from '@sap/cds/common';

type Contact {
    phoneNumber : String(40);
    mobilNumber : String(40);
    email       : String(100);
}

entity Partners : cuid, managed {
    name1    : String;
    name2    : String;
    name3    : String;
    address  : Composition of many Addesses
                   on address.partner = $self;
    type     : Association to PartnerTypes;
    idNumber : Composition of one PartnerIDs on idNumber.partner = $self;
}

entity Addesses : cuid, managed {
    address1 : String;
    address2 : String;
    address3 : String;
    country  : String(20);
    city     : String(20);
    postcode : String(5);
    partner  : Association to Partners;
}

entity PartnerTypes {
    key ID          : Integer;
        type        : String(3);
        description : String(255);
        partner     : Association to many Partners
                          on partner.type = $self;
}

entity PartnerIDs : cuid {
    idNumber : String(20);
    type     : Association to IdTypes;
    partner  : Association to Partners;
}

entity IdTypes {
    key ID          : Integer;
        type        : String(3);
        description : String(255);
        partnerId   : Association to many PartnerIDs
                          on partnerId.type = $self;
}
