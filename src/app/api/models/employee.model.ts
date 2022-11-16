import { Department } from "./department.model";
import { MaritalStatus } from "./employee/marital-status.model";

export interface Employee{
    id?:number;
    department_id:number;
    first_name:string;
    last_name:string;
    contact_address:string;
    mobile_phone:string;
    dob:string;
    department?:Department;
    MaritalStatus?:MaritalStatus

}