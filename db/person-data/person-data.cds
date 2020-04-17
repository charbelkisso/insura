namespace person;

using {cuid} from '@sap/cds/common';
using {masterdata} from '../master-data/master-data';

entity Persons : cuid {
    partner        : Composition of one masterdata.Partners;
    personalNumber : String(12);
    birthDate      : Date;
    contactInfo    : masterdata.Contact;
}