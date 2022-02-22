import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/Category/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(`http://localhost:27944/api/Categories`);
  }
  insertCategory(data: Category): Observable<Category> {
    return this.http.post<Category>(`http://localhost:27944/api/Categories`, data);
  }
  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`http://localhost:27944/api/Categories/${id}`);
  }
  updateCategory(data: Category): Observable<any> {
    return this.http.put<Category>(`http://localhost:27944/api/Categories/${data.categoryId}`, data);
  }
  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`http://localhost:27944/api/Categories/${id}`);
  }
}
