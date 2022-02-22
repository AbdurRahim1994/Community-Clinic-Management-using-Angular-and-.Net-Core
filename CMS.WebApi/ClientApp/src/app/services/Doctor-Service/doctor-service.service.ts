import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceDoctor } from '../../models/Doctor-Service/doctor-service';

@Injectable({
  providedIn: 'root'
})
export class DoctorServiceService {

  constructor(private http: HttpClient) { }
  getDoctorService(): Observable<ServiceDoctor[]> {
    return this.http.get<ServiceDoctor[]>(`http://localhost:27944/api/DoctorServices`);
  }

  insertDoctorService(data: ServiceDoctor): Observable<ServiceDoctor> {
    return this.http.post<ServiceDoctor>(`http://localhost:27944/api/DoctorServices`, data);
  }
}
