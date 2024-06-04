import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HabitacionInterface } from './habitaciones.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {
  private baseUrl = 'http://localhost:8086/Room';

  constructor(private http: HttpClient) { }

  getHabitaciones(): Observable<HabitacionInterface[]> {
    return this.http.get<HabitacionInterface[]>(this.baseUrl);
  }

  getHabitacionById(id: number): Observable<HabitacionInterface> {
    return this.http.get<HabitacionInterface>(`${this.baseUrl}/${id}`);
  }

  updateHabitacion(id: number, habitacion: HabitacionInterface): Observable<HabitacionInterface> {
    return this.http.put<HabitacionInterface>(`${this.baseUrl}/${id}`, habitacion);
  }

  createHabitacion(habitacion: HabitacionInterface): Observable<HabitacionInterface> {
    return this.http.post<HabitacionInterface>(this.baseUrl, habitacion);
  }
}
