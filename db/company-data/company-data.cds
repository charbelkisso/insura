namespace company;


using {cuid} from '@sap/cds/common';
using {
    masterdata,
    person
} from '../index';


entity Companies : cuid {
    partner       : Composition of one masterdata.Partners;
    contactPerson : Association to person.Persons;
}
