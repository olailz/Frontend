import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HistorialMedicoService } from './historialmedico.service';
import { MedicalHistoryInterface } from './historialmedico.interface';

@Component({
  selector: 'app-form-historial-medico',
  templateUrl: './form.historialmedico.component.html',
})
export class FormHistorialMedicoComponent implements OnInit {
  historial: MedicalHistoryInterface = {
    idHistory: 0,
    idpatient: { id: 0, name: '', lastname: '', phone: 0, address: '', birthdate: new Date(), email: '' },
    id_doctor: { id: 0, especiality: { idspeciality: 0, speciality: '' }, name: '', lastname: '', phone: 0, adress: '', email: '' },
    consultationDate: '',
    diagnosis: '',
    treatament: ''
  };
  isUpdateMode: boolean = false;

  constructor(
    private historialMedicoService: HistorialMedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdateMode = true;
      this.historialMedicoService.getHistorialMedicoById(id).subscribe((data: MedicalHistoryInterface) => {
        this.historial = data;
      }, (error: any) => {
        console.error('Error al obtener el historial médico:', error);
      });
    }
  }

  saveHistorial(): void {
    if (this.isUpdateMode) {
      if (this.historial.idHistory) {
        this.historialMedicoService.updateHistorialMedico(this.historial.idHistory, this.historial).subscribe(() => {
          console.log('Historial médico actualizado con éxito');
          this.router.navigate(['/historiales-medicos']);
        }, (error: any) => {
          console.error('Error al actualizar el historial médico:', error);
        });
      } else {
        console.error('El ID del historial médico es null o undefined');
      }
    } else {
      this.historialMedicoService.addHistorialMedico(this.historial).subscribe(() => {
        console.log('Historial médico registrado con éxito');
        this.router.navigate(['/historiales-medicos']);
      }, (error: any) => {
        console.error('Error al registrar el historial médico:', error);
      });
    }
  }

}
