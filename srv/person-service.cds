using { person } from '../db/index';

service PersonService {
    entity Persons as projection on person.Persons;
}