import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { PatientInterface } from './patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8091/Patient';
  private urlEndPoint: string = 'http://localhost:8091/Patient';

  constructor(private http: HttpClient) { }

  getPatients(): Observable<PatientInterface[]> {
    return this.http.get<PatientInterface[]>(this.baseUrl);
  }

  getPatientById(id: number): Observable<PatientInterface> {
    return this.http.get<PatientInterface>(`${this.baseUrl}/${id}`);
  }

  addPatient(patient: PatientInterface): Observable<PatientInterface> {
    return this.http.post<PatientInterface>(`${this.baseUrl}/add`, patient);
  }

  updatePatient(id: number, patient: PatientInterface): Observable<PatientInterface> {
    return this.http.put<PatientInterface>(`${this.baseUrl}/patients/${id}`, patient);
  }

  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/patients/${id}`);
  }

  findPatientByName(name: string): Observable<PatientInterface[]> {
    return this.http.get<PatientInterface[]>(`${this.baseUrl}/patients`, {
      params: { name }
    });
  }
}

