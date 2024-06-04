import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicalHistoryInterface } from './historialmedico.interface';

@Injectable({
  providedIn: 'root'
})
export class HistorialMedicoService {
  private baseUrl = 'http://localhost:8081/MedicalHistory';

  constructor(private http: HttpClient) { }

  getHistorialesMedicos(): Observable<MedicalHistoryInterface[]> {
    return this.http.get<MedicalHistoryInterface[]>(this.baseUrl);
  }

  getHistorialMedicoById(id: number): Observable<MedicalHistoryInterface> {
    return this.http.get<MedicalHistoryInterface>(`${this.baseUrl}/${id}`);
  }

  addHistorialMedico(historial: MedicalHistoryInterface): Observable<MedicalHistoryInterface> {
    return this.http.post<MedicalHistoryInterface>(`${this.baseUrl}/create`, historial);
  }

  updateHistorialMedico(id: number, historial: MedicalHistoryInterface): Observable<MedicalHistoryInterface> {
    return this.http.put<MedicalHistoryInterface>(`${this.baseUrl}/${id}`, historial);
  }

  deleteHistorialMedico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
