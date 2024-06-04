import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicoInterface } from './medico.interface';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private baseUrl = 'http://localhost:8888/Medico';

  constructor(private http: HttpClient) { }

  getMedicos(): Observable<MedicoInterface[]> {
    return this.http.get<MedicoInterface[]>(this.baseUrl);
  }

  getMedicoById(id: number): Observable<MedicoInterface> {
    return this.http.get<MedicoInterface>(`${this.baseUrl}/${id}`);
  }

  addMedico(medico: MedicoInterface): Observable<MedicoInterface> {
    return this.http.post<MedicoInterface>(`${this.baseUrl}/add`, medico);
  }

  updateMedico(id: number, medico: MedicoInterface): Observable<MedicoInterface> {
    return this.http.put<MedicoInterface>(`${this.baseUrl}/${id}`, medico);
  }

  deleteMedico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  findMedicoByName(name: string): Observable<MedicoInterface[]> {
    return this.http.get<MedicoInterface[]>(`${this.baseUrl}/search`, {
      params: { name }
    });
  }
}
