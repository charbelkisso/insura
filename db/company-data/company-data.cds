namespace company;
using { masterdata, person } from '../index';



entity Companies : masterdata.Partners {
    contactPerson : Association to person.Persons;
}
