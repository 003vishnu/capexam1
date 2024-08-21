using { ust.vishnuvardhan.thirunagari.db } from '../db/datamodel';
 
service EmployeeService @(path: 'EmployeeService') {
 
   entity EmployeeSet as projection on db.master.employees;

}