import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../models/Service/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  getService(): Observable<Service[]> {
    return this.http.get<Service[]>(`http://localhost:27944/api/Services`);
  }
  insertService(data: Service): Observable<Service> {
    return this.http.post<Service>(`http://localhost:27944/api/Services`, data);
  }
  getServiceById(id: number): Observable<Service> {
    return this.http.get<Service>(`http://localhost:27944/api/Services/${id}`);
  }
  updateService(data: Service): Observable<any> {
    return this.http.put<Service>(`http://localhost:27944/api/Services/${data.serviceId}`, data);
  }
  deleteService(id: number): Observable<Service> {
    return this.http.delete<Service>(`http://localhost:27944/api/Services/${id}`)
  }
}
