import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

import { Employee } from "../models/employee.model";


@Injectable({
    providedIn: 'root',
})
export class EmployeeEndPoint {
    baseUrl = `${environment.apiUrl}/employees/register-employee`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<{ data: Employee[] }>(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: Employee }>(`${this.baseUrl}/${id}`);
    }

    create(data:Employee) {
        return this.httpClient.post<{ data: Employee }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data:Employee) {
        return this.httpClient.put<{ data: Employee }>(`${this.baseUrl}/${id}`, data);
    }
}