using { company } from '../db/index';

service CompanyService {
    entity Companies as projection on company.Companies;
}