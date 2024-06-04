import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicoService } from './medico.service';
import { MedicoInterface } from './medico.interface';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  medicos: MedicoInterface[] = [];
  mostrarLista: boolean = false;
  searchId: number = 0;
  searchName: string = '';

  constructor(private medicoService: MedicoService, private router: Router) { }

  ngOnInit(): void { }

  mostrarMedicos(): void {
    this.medicoService.getMedicos().subscribe((data: MedicoInterface[]) => {
      this.medicos = data;
      this.mostrarLista = true;
    }, error => {
      console.error('Error al obtener los médicos:', error);
    });
  }

  buscarMedicoPorId(): void {
    if (this.searchId > 0) {
      this.medicoService.getMedicoById(this.searchId).subscribe((medico: MedicoInterface) => {
        this.medicos = [medico];
        this.mostrarLista = true;
      }, error => {
        console.error('Error al buscar el médico por ID:', error);
      });
    } else {
      console.error('ID inválido para la búsqueda');
    }
  }

  buscarMedicoPorNombre(): void {
    if (this.searchName.trim().length > 0) {
      this.medicoService.findMedicoByName(this.searchName).subscribe((medicos: MedicoInterface[]) => {
        this.medicos = medicos;
        this.mostrarLista = true;
      }, error => {
        console.error('Error al buscar médicos por nombre:', error);
      });
    } else {
      console.error('Nombre inválido para la búsqueda');
    }
  }

  borrarMedico(id: number): void {
    this.medicoService.deleteMedico(id).subscribe(() => {
      console.log('Médico borrado con éxito');
      this.mostrarMedicos();
    }, error => {
      console.error('Error al borrar el médico:', error);
    });
  }

  registrarNuevoMedico() {
    this.router.navigate(['/register-medico']);
  }

  actualizarInformacionMedico(id: number): void {
    this.router.navigate(['/update-medico', id]);
  }
}
