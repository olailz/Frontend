import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppoimentService } from './appoiment.service';
import { AppoimentInterface } from './appoiment.interface';

@Component({
  selector: 'app-appoiment',
  templateUrl: './appoiment.component.html',
  styleUrls: ['./appoiment.component.css']
})
export class AppoimentComponent implements OnInit {
  appoiments: AppoimentInterface[] = [];
  mostrarLista: boolean = false;
  searchId: number = 0;

  constructor(private appoimentService: AppoimentService, private router: Router) { }

  ngOnInit(): void { }

  mostrarAppoiments(): void {
    this.appoimentService.getAppoiments().subscribe((data: AppoimentInterface[]) => {
      this.appoiments = data;
      this.mostrarLista = true;
    }, error => {
      console.error('Error al obtener las citas médicas:', error);
    });
  }

  buscarAppoimentPorId(): void {
    if (this.searchId > 0) {
      this.appoimentService.getAppoimentById(this.searchId).subscribe((appoiment: AppoimentInterface) => {
        this.appoiments = [appoiment];
        this.mostrarLista = true;
      }, error => {
        console.error('Error al buscar la cita médica por ID:', error);
      });
    } else {
      console.error('ID inválido para la búsqueda');
    }
  }

  borrarAppoiment(id: number): void {
    this.appoimentService.deleteAppoiment(id).subscribe(() => {
      console.log('Cita médica borrada con éxito');
      this.mostrarAppoiments();
    }, error => {
      console.error('Error al borrar la cita médica:', error);
    });
  }

  registrarNuevaAppoiment() {
    this.router.navigate(['/register-appoiment']);
  }

  actualizarInformacionAppoiment(id: number): void {
    this.router.navigate(['/update-appoiment', id]);
  }
}
