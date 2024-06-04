import { Component, OnInit } from '@angular/core';
import { ReportService } from './reportes.service';
import { ReportInterface } from './reportes.interface';
import { ActivatedRoute, Router } from '@angular/router';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-form-report',
  templateUrl: './form.reportes.component.html',animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('0.5s ease-in')
      ])
    ])
  ]
})
export class FormReportesComponent implements OnInit {
  report: ReportInterface = {
    idReport: 0,
    idPatient: 0,
    generationDate: new Date(),
    reportType: '',
    conten: ''
  };
  isUpdate: boolean = false;

  constructor(
    private reportService: ReportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isUpdate = true;
        this.reportService.getReportById(params['id']).subscribe(report => {
          this.report = report;
        });
      }
    });
  }

  onSubmit(): void {
    if (this.isUpdate) {
      this.reportService.updateReport(this.report.idReport, this.report).subscribe(
        response => {
          // Redirigir o mostrar mensaje de éxito
          this.router.navigate(['/reports']);
        },
        error => {
          // Manejo de errores
          console.error('Error updating report:', error);
        }
      );
    } else {
      this.reportService.addReport(this.report).subscribe(
        response => {
          // Redirigir o mostrar mensaje de éxito
          this.router.navigate(['/reports']);
        },
        error => {
          // Manejo de errores
          console.error('Error adding report:', error);
        }
      );
    }
  }
}
