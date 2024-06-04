import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HabitacionService } from './habitaciones.service';
import { HabitacionInterface } from './habitaciones.interface';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form.habitaciones.component.html',
  styleUrls: ['./form.habitaciones.component.css']
})
export class FormHabitacionComponent implements OnInit {
  habitacion: HabitacionInterface = {
    idroom: 0,
    estado: '',
    idpatient: null
  };
  isUpdateMode: boolean = false;

  constructor(
    private habitacionService: HabitacionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdateMode = true;
      this.habitacionService.getHabitacionById(id).subscribe((data: HabitacionInterface) => {
        this.habitacion = data;
      }, error => {
        console.error('Error al obtener la habitación:', error);
      });
    }
  }

  saveHabitacion(): void {
    if (this.isUpdateMode) {
      this.habitacionService.updateHabitacion(this.habitacion.idroom, this.habitacion).subscribe(() => {
        console.log('Habitación actualizada con éxito');
        this.router.navigate(['/habitaciones']);
      }, error => {
        console.error('Error al actualizar la habitación:', error);
      });
    } else {
      this.habitacionService.createHabitacion(this.habitacion).subscribe(() => {
        console.log('Habitación creada con éxito');
        this.router.navigate(['/habitaciones']);
      }, error => {
        console.error('Error al crear la habitación:', error);
      });
    }
  }
}
