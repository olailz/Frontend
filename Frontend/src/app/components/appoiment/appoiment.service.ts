import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppoimentInterface } from './appoiment.interface';

@Injectable({
  providedIn: 'root'
})
export class AppoimentService {
  private baseUrl = 'http://localhost:8280/Appoiment';

  constructor(private http: HttpClient) { }

  getAppoiments(): Observable<AppoimentInterface[]> {
    return this.http.get<AppoimentInterface[]>(this.baseUrl);
  }

  getAppoimentById(id: number): Observable<AppoimentInterface> {
    return this.http.get<AppoimentInterface>(`${this.baseUrl}/${id}`);
  }

  addAppoiment(appoiment: AppoimentInterface): Observable<AppoimentInterface> {
    return this.http.post<AppoimentInterface>(`${this.baseUrl}`, appoiment);
  }

  updateAppoiment(id: number, appoiment: AppoimentInterface): Observable<AppoimentInterface> {
    return this.http.put<AppoimentInterface>(`${this.baseUrl}/${id}`, appoiment);
  }

  deleteAppoiment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}

