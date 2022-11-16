import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './Employees/employee-form/employee-form.component';
import { RegisterComponent } from './forms/register/register.component';

const routes: Routes = [
  {path: 'employee-form', component:EmployeeFormComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
