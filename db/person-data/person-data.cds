namespace person;

using {masterdata} from '../master-data/master-data';

entity Persons : masterdata.Partners {
    personalNumber : String(12);
    birthDate      : Date;
    contactInfo    : masterdata.Contact;
}