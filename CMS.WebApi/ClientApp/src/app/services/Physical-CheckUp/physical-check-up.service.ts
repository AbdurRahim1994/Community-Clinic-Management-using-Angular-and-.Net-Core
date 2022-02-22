import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PhysicalCheckUp } from '../../models/Physical-CheckUp/physical-check-up';


@Injectable({
  providedIn: 'root'
})
export class PhysicalCheckUpService {

  constructor(private http: HttpClient) { }
  getPhysicalCheckUp(): Observable<PhysicalCheckUp[]> {
    return this.http.get<PhysicalCheckUp[]>(`http://localhost:27944/api/PhysicalCheckUps`);
  }
  insertPhysicalCheckUp(data: PhysicalCheckUp): Observable<PhysicalCheckUp> {
    return this.http.post<PhysicalCheckUp>(`http://localhost:27944/api/PhysicalCheckUps`, data);
  }
  getPhysicalCheckUpById(id: number): Observable<PhysicalCheckUp> {
    return this.http.get<PhysicalCheckUp>(`http://localhost:27944/api/PhysicalCheckUps/${id}`);
  }
  updatePhysicalCheckUp(data: PhysicalCheckUp): Observable<any> {
    return this.http.put<PhysicalCheckUp>(`http://localhost:27944/api/PhysicalCheckUps/${data.physicalCheckUpId}`, data);
  }
  deletePhysicalCheckUp(id: number): Observable<PhysicalCheckUp> {
    return this.http.delete<PhysicalCheckUp>(`http://localhost:27944/api/PhysicalCheckUps/${id}`);
  }
}
