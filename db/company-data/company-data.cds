namespace company;

using {
    masterdata,
    person
} from '../index';


entity Companies : masterdata.Partners {
    contactPerson : Association to person.Persons;
    companyType   : Association to CompanyTypes;
}

entity CompanyTypes {
    key ID          : Integer;
        type        : String(3);
        description : String(255);
}
