import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from "./patient.service";
import { PatientInterface } from "./patient.interface";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: PatientInterface[] = [];
  mostrarLista: boolean = false;
  searchId: number = 0;
  searchName: string = '';

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void { }

  mostrarPacientes(): void {
    this.patientService.getPatients().subscribe((data: PatientInterface[]) => {
      this.patients = data;
      this.mostrarLista = true;
    }, error => {
      console.error('Error al obtener los pacientes:', error);
    });
  }

  buscarPacientePorId(): void {
    if (this.searchId > 0) {
      this.patientService.getPatientById(this.searchId).subscribe((patient: PatientInterface) => {
        this.patients = [patient];  // Mostrar solo el paciente encontrado
        this.mostrarLista = true;
      }, error => {
        console.error('Error al buscar el paciente por ID:', error);
      });
    } else {
      console.error('ID inválido para la búsqueda');
    }
  }

  buscarPacientePorNombre(): void {
    if (this.searchName.trim().length > 0) {
      this.patientService.findPatientByName(this.searchName).subscribe((patients: PatientInterface[]) => {
        this.patients = patients;  // Mostrar los pacientes encontrados
        this.mostrarLista = true;
      }, error => {
        console.error('Error al buscar pacientes por nombre:', error);
      });
    } else {
      console.error('Nombre inválido para la búsqueda');
    }
  }

  borrarPaciente(id: number): void {
    console.log('ID del paciente a borrar:', id);
    if (id) {
      this.patientService.deletePatient(id).subscribe(() => {
        console.log('Paciente borrado con éxito', id);
        this.mostrarPacientes();
      }, error => {
        console.error('Error al borrar el paciente:', error);
      });
    } else {
      console.error('ID de paciente no válido');
    }
  }

  registrarNuevoPaciente(): void {
    this.router.navigate(['/register']);
  }

  actualizarInformacionPaciente(id: number): void {
    console.log('ID del paciente a actualizar:', id);
    if (id) {
      this.router.navigate(['/update', id]);
    } else {
      console.error('ID de paciente no válido');
    }
  }
}

