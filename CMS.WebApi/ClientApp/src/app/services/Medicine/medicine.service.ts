import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from '../../models/Medicine/medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private http: HttpClient) { }
  getMedicine(): Observable<Medicine[]> {
    return this.http.get<Medicine[]>(`http://localhost:27944/api/Medicines`);
  }
  insertMedicine(data: Medicine): Observable<Medicine> {
    return this.http.post<Medicine>(`http://localhost:27944/api/Medicines`, data);
  }
  getMedicineById(id: number): Observable<Medicine> {
    return this.http.get<Medicine>(`http://localhost:27944/api/Medicines/${id}`);
  }
  updateMedicine(data: Medicine): Observable<any> {
    return this.http.put<Medicine>(`http://localhost:27944/api/Medicines/${data.medicineId}`, data);
  }
  deleteMedicine(id: number): Observable<Medicine> {
    return this.http.delete<Medicine>(`http://localhost:27944/api/Medicines/${id}`);
  }
}
