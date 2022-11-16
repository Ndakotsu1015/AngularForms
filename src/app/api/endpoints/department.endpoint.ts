import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Department } from "../models/department.model";

@Injectable({
    providedIn: 'root',
})
export class DepartmentEndPoint {
    baseUrl = `${environment.apiUrl}/employees/register-department`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<{ data: Department[] }>(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: Department }>(`${this.baseUrl}/${id}`);
    }

    create(data:Department) {
        return this.httpClient.post<{ data: Department }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data:Department) {
        return this.httpClient.put<{ data: Department }>(`${this.baseUrl}/${id}`, data);
    }
}