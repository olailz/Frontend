import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ReportInterface } from './reportes.interface';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiUrl = 'http://localhost:8099/reports'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getReports(): Observable<ReportInterface[]> {
    return this.http.get<ReportInterface[]>(this.apiUrl);
  }

  getReportById(id: number): Observable<ReportInterface> {
    return this.http.get<ReportInterface>(`${this.apiUrl}/${id}`);
  }

  getReportsByTypeAndDate(type: string, date: string): Observable<ReportInterface[]> {
    return this.http.get<ReportInterface[]>(`${this.apiUrl}/search?type=${type}&date=${date}`);
  }

  addReport(report: ReportInterface): Observable<ReportInterface> {
    return this.http.post<ReportInterface>(this.apiUrl, report);
  }

  updateReport(id: number, report: ReportInterface): Observable<ReportInterface> {
    return this.http.put<ReportInterface>(`${this.apiUrl}/${id}`, report);
  }

  deleteReport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
