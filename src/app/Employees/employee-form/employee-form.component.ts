import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentEndPoint } from 'src/app/api/endpoints/department.endpoint';
import { EmployeeEndPoint } from 'src/app/api/endpoints/employee.endpoint';
import { MaritalStatusEndPoint } from 'src/app/api/endpoints/marital-status.endpoint';
import { Department } from 'src/app/api/models/department.model';
import { Employee } from 'src/app/api/models/employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  employeeForm!: FormGroup;

  departments:any;
  formRequestData:any;
  maritalStatuses: any;
  

  constructor(private departmentEndPoint:DepartmentEndPoint, 
    private employeeEndPoint:EmployeeEndPoint,private maritalStatusEndPoint:MaritalStatusEndPoint) {
    this.employeeForm =new FormGroup({
      first_name: new FormControl(null),
      last_name: new FormControl(""),
      contact_name: new FormControl(""),
      mobile_phone: new FormControl(""),
      contact_address: new FormControl(""),
      department_id: new FormControl<number | null>(null),
      marital_status_id: new FormControl<number|null>(null),
      dob: new FormControl("")
  
    });
   }

  ngOnInit(): void {
    this.departmentEndPoint.list().subscribe({
      next: (response)=>{
        this.departments = response;
        // console.log('Res',response)
      },
      error:(error) => console.log(error)
    });

    this.maritalStatusEndPoint.list().subscribe({
      next: (response: any)=>{
        this.maritalStatuses = response;
        console.log('Res',response)
      },
      error:(error: any) => console.log(error)
    });
  }

  get employeeFormControl(){
    return this.employeeForm.controls;
  }



  registeremployeeFormsubmited(){

    console.log(this.employeeFormControl['dob'].value);
    const formData = {
      first_name:this.employeeFormControl['first_name'].value,
      last_name:this.employeeFormControl['last_name'].value,
      contact_address:this.employeeFormControl['contact_address'].value,
      mobile_phone:this.employeeFormControl['mobile_phone'].value,
      dob:this.employeeFormControl['dob'].value,
      department_id:this.employeeFormControl['department_id'].value,
      marital_status_id:this.employeeFormControl['marital_status_id'].value,
    };
    this.formRequestData =formData;
    console.log(formData);

    this.employeeEndPoint.create(this.formRequestData).subscribe({
      next: (response)=>{
        console.log('Response',response)
      },
      error:(error) => console.log(error)
    });
  
  }

}
