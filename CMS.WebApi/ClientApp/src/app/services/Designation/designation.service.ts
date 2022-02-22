import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from '../../models/Designation/designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpClient) { }
  getDesignation(): Observable<Designation[]> {
    return this.http.get<Designation[]>(`http://localhost:27944/api/Designations`);
  }
  insertDesignation(data: Designation): Observable<Designation> {
    return this.http.post<Designation>(`http://localhost:27944/api/Designations`, data);
  }
  getDesignationById(id: number): Observable<Designation> {
    return this.http.get<Designation>(`http://localhost:27944/api/Designations/${id}`);
  }
  updateDesignation(data: Designation): Observable<any> {
    return this.http.put<Designation>(`http://localhost:27944/api/Designations/${data.designationId}`, data);
  }
  deleteDesignation(id: number): Observable<Designation> {
    return this.http.delete<Designation>(`http://localhost:27944/api/Designations/${id}`);
  }
}
