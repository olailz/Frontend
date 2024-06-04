import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HistorialMedicoService } from './historialmedico.service';
import { MedicalHistoryInterface } from './historialmedico.interface';

@Component({
  selector: 'app-historial-medico',
  templateUrl: './historialmedico.component.html',
  styleUrls: ['./historialmedico.component.css']
})
export class HistorialMedicoComponent implements OnInit {
  historialesMedicos: MedicalHistoryInterface[] = [];
  mostrarLista: boolean = false;
  searchId: number = 0;

  constructor(private historialMedicoService: HistorialMedicoService, private router: Router) { }

  ngOnInit(): void { }

  mostrarHistorialesMedicos(): void {
    this.historialMedicoService.getHistorialesMedicos().subscribe((data: MedicalHistoryInterface[]) => {
      this.historialesMedicos = data;
      this.mostrarLista = true;
    }, (error: any) => {
      console.error('Error al obtener los historiales médicos:', error);
    });
  }

  buscarHistorialMedicoPorId(): void {
    if (this.searchId > 0) {
      this.historialMedicoService.getHistorialMedicoById(this.searchId).subscribe((historial: MedicalHistoryInterface) => {
        this.historialesMedicos = [historial];
        this.mostrarLista = true;
      }, (error: any) => {
        console.error('Error al buscar el historial médico por ID:', error);
      });
    } else {
      console.error('ID inválido para la búsqueda');
    }
  }

  borrarHistorialMedico(id: number): void {
    this.historialMedicoService.deleteHistorialMedico(id).subscribe(() => {
      console.log('Historial médico borrado con éxito');
      this.mostrarHistorialesMedicos();
    }, (error: any) => {
      console.error('Error al borrar el historial médico:', error);
    });
  }

  registrarNuevoHistorialMedico() {
    this.router.navigate(['/register-historial-medico']);
  }

  actualizarInformacionHistorialMedico(id: number): void {
    this.router.navigate(['/update-historial-medico', id]);
  }
}

