import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../models/Doctor/doctor';
import { ImagePathResponse } from '../../models/Image/image-path-response';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }
  getDoctor(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`http://localhost:27944/api/Doctors`);
  }
  insertDoctor(data: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`http://localhost:27944/api/Doctors`, data);
  }
  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`http://localhost:27944/api/Doctors/${id}`);
  }
  updateDoctor(data: Doctor): Observable<any> {
    return this.http.put<Doctor>(`http://localhost:27944/api/Doctors/${data.doctorId}`, data);
  }
  deleteDoctor(id: number): Observable<Doctor> {
    return this.http.delete(`http://localhost:27944/api/Doctors/${id}`);
  }
  upload(id: number, f: File): Observable<ImagePathResponse> {
    const formData = new FormData();
    formData.append('file', f);
    return this.http.post<ImagePathResponse>(`http://localhost:27944/api/Doctors/Images/${id}`, formData);
  }
}
