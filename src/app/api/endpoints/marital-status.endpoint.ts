import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { MaritalStatus } from "../models/employee/marital-status.model";

@Injectable({
    providedIn: 'root',
})
export class MaritalStatusEndPoint {
    baseUrl = `${environment.apiUrl}/employees/register-marital-status`;

    constructor(private readonly httpClient: HttpClient) {}

    list() {
        return this.httpClient.get<{ data: MaritalStatus[] }>(`${this.baseUrl}`);
    }

    single(id: number) {
        return this.httpClient.get<{ data: MaritalStatus }>(`${this.baseUrl}/${id}`);
    }

    create(data:MaritalStatus) {
        return this.httpClient.post<{ data: MaritalStatus }>(`${this.baseUrl}`, data);
    }
       
    delete(id: number) {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
    }

    update(id: number, data:MaritalStatus) {
        return this.httpClient.put<{ data: MaritalStatus }>(`${this.baseUrl}/${id}`, data);
    }
}