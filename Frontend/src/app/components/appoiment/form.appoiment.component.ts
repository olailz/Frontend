import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppoimentService } from './appoiment.service';
import { AppoimentInterface } from './appoiment.interface';

@Component({
  selector: 'app-form-appoiment',
  templateUrl: './form.appoiment.component.html',
  styleUrls: ['./form.appoiment.component.css']
})
export class FormAppoimentComponent implements OnInit {
  appoiment: AppoimentInterface = {
    idappoiment: 0,
    idpatient: 0,
    iddoctor: 0,
    idroom: 0,
    dateappoiment: '',
    appoimenttime: '',
    status: '',
    observacion: ''
  };
  isUpdateMode: boolean = false;

  constructor(
    private appoimentService: AppoimentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.isUpdateMode = true;
      this.appoimentService.getAppoimentById(id).subscribe((data: AppoimentInterface) => {
        this.appoiment = data;
      }, error => {
        console.error('Error al obtener la cita médica:', error);
      });
    }
  }

  saveAppoiment(): void {
    if (this.isUpdateMode) {
      this.appoimentService.updateAppoiment(this.appoiment.idappoiment, this.appoiment).subscribe(() => {
        console.log('Cita médica actualizada con éxito');
        this.router.navigate(['/appointments']);
      }, error => {
        console.error('Error al actualizar la cita médica:', error);
      });
    } else {
      this.appoimentService.addAppoiment(this.appoiment).subscribe(() => {
        console.log('Cita médica registrada con éxito');
        this.router.navigate(['/appointments']);
      }, error => {
        console.error('Error al registrar la cita médica:', error);
      });
    }
  }
}

