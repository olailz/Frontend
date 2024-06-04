
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MedicoService } from './medico.service';
import { MedicoInterface } from './medico.interface';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form.medico.component.html',
  styleUrls: ['./form.medico.component.css']
})
export class FormMedicoComponent implements OnInit {
  medico: MedicoInterface = {
    id: 0,
    especiality: { idspeciality: 0, speciality: '' }, // Inicializar correctamente
    name: '',
    lastname: '',
    phone: 0,
    adress: '',
    email: ''
  };
  isUpdateMode: boolean = false;

  constructor(
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdateMode = true;
      this.medicoService.getMedicoById(id).subscribe((data: MedicoInterface) => {
        this.medico = data;
      }, error => {
        console.error('Error al obtener el médico:', error);
      });
    }
  }

  saveMedico(): void {
    if (this.isUpdateMode) {
      this.medicoService.updateMedico(this.medico.id, this.medico).subscribe(() => {
        console.log('Médico actualizado con éxito');
        this.router.navigate(['/medicos']);
      }, error => {
        console.error('Error al actualizar el médico:', error);
      });
    } else {
      this.medicoService.addMedico(this.medico).subscribe(() => {
        console.log('Médico registrado con éxito');
        this.router.navigate(['/medicos']);
      }, error => {
        console.error('Error al registrar el médico:', error);
      });
    }
  }
}
