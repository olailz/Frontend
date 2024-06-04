import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabitacionService } from './habitaciones.service';
import { HabitacionInterface } from './habitaciones.interface';

@Component({
  selector: 'app-habitacion',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionComponent implements OnInit {
  habitaciones: HabitacionInterface[] = [];
  mostrarLista: boolean = false;

  constructor(private habitacionService: HabitacionService, private router: Router) { }

  ngOnInit(): void { }

  mostrarHabitaciones(): void {
    this.habitacionService.getHabitaciones().subscribe((data: HabitacionInterface[]) => {
      this.habitaciones = data;
      this.mostrarLista = true;
    }, error => {
      console.error('Error al obtener las habitaciones:', error);
    });
  }

  actualizarInformacionHabitacion(id: number): void {
    this.router.navigate(['/update-habitacion', id]);
  }
}
