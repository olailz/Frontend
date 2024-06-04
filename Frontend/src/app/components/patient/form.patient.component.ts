import {Component, OnInit} from "@angular/core";
import {PatientService} from "./patient.service";
import {PatientInterface} from "./patient.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.patient.component.html',
})

export class FormPatientComponent implements OnInit{

  patient: PatientInterface = {
    id: 0,
    name: '',
    lastname: '',
    phone: 0,
    birthdate: new Date(),
    address: '' ,
    email:''
  };

  isUpdate: boolean = false;

  constructor(private patientService: PatientService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.patientService.getPatientById(params['id']).subscribe(patient => {
          this.patient = patient;
        });
      }
    });
  }

  onSubmit() {
    if (this.isUpdate) {
      this.actualizarInformacionPaciente();
    } else {
      this.registrarNuevoPaciente();
    }
  }

  actualizarInformacionPaciente(): void {
    this.patientService.updatePatient(this.patient.id, this.patient).subscribe(response => {
      console.log('Información del paciente actualizada:', response);
      this.router.navigate(['/patients']);
    }, error => {
      console.error('Error al actualizar la información del paciente:', error);
    });
  }

  registrarNuevoPaciente(): void {
    this.patientService.addPatient(this.patient).subscribe(response => {
      console.log('Paciente registrado:', response);
      this.router.navigate(['/patients']);
    }, error => {
      console.error('Error al registrar el paciente:', error);
    });
  }

}
