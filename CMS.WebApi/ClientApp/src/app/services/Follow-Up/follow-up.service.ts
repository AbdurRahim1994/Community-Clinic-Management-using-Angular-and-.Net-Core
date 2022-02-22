import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FollowUp } from '../../models/Follow-Up/follow-up';

@Injectable({
  providedIn: 'root'
})
export class FollowUpService {

  constructor(private http: HttpClient) { }
  getFollowUp(): Observable<FollowUp[]> {
    return this.http.get<FollowUp[]>(`http://localhost:27944/api/FollowUps`);
  }

  insertFollowUp(data: FollowUp): Observable<FollowUp> {
    return this.http.post<FollowUp>(`http://localhost:27944/api/FollowUps`, data);
  }

  getFollowUpById(id: number): Observable<FollowUp> {
    return this.http.get<FollowUp>(`http://localhost:27944/api/FollowUps/${id}`);
  }

  updateFollowUp(data: FollowUp): Observable<any> {
    return this.http.put<FollowUp>(`http://localhost:27944/api/FollowUps/${data.followUpId}`, data);
  }

  deleteFollowUp(id: number): Observable<FollowUp> {
    return this.http.delete<FollowUp>(`http://localhost:27944/api/FollowUps/${id}`);
  }
}
