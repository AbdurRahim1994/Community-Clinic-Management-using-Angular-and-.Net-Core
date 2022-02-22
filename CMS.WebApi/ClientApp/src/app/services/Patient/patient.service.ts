import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../../models/Patient/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }
  getPatient(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`http://localhost:27944/api/Patients`);
  }
  insertPatient(data: Patient): Observable<Patient> {
    return this.http.post<Patient>(`http://localhost:27944/api/Patients`, data);
  }
  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`http://localhost:27944/api/Patients/${id}`);
  }
  updatePatient(data: Patient): Observable<any> {
    return this.http.put<Patient>(`http://localhost:27944/api/Patients/${data.patientId}`, data);
  }
  deletePatient(id: number): Observable<Patient> {
    return this.http.delete<Patient>(`http://localhost:27944/api/Patients/${id}`);
  }
}
