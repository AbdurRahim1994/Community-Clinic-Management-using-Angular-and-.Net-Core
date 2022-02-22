import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineStock } from '../../models/Medicine-Stock/medicine-stock';

@Injectable({
  providedIn: 'root'
})
export class MedicineStockService {

  constructor(private http: HttpClient) { }
  getMedicineStock(): Observable<MedicineStock[]> {
    return this.http.get<MedicineStock[]>(`http://localhost:27944/api/MedicineStocks`);
  }
  insertMedicineStock(data: MedicineStock): Observable<MedicineStock> {
    return this.http.post<MedicineStock>(`http://localhost:27944/api/MedicineStocks`, data);
  }
  getMedicineStockById(id: number): Observable<MedicineStock> {
    return this.http.get<MedicineStock>(`http://localhost:27944/api/MedicineStocks/${id}`);
  }
  updateMedicineStock(data: MedicineStock): Observable<any> {
    return this.http.put<MedicineStock>(`http://localhost:27944/api/MedicineStocks/${data.medicineStockId}`, data);
  }
  deleteMedicineStock(id: number): Observable<MedicineStock> {
    return this.http.delete<MedicineStock>(`http://localhost:27944/api/MedicineStocks/${id}`);
  }
}
