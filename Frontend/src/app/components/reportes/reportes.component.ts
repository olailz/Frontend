import { Component, OnInit } from '@angular/core';
import { ReportInterface } from './reportes.interface';
import { ReportService } from "./reportes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-report',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reports: ReportInterface[] = [];
  mostrarLista: boolean = false;
  searchId: string = '';
  searchType: string = '';
  searchDate: string = '';
  errorMessage: string = '';

  constructor(private reportService: ReportService, private router: Router) {}

  ngOnInit(): void {
    this.mostrarLista=false;
  }

  mostrarInformes(): void {
    this.reportService.getReports().subscribe(reports => {
      this.reports = reports;
      this.mostrarLista = true;
    });
  }

  registrarNuevoInforme(): void {
    this.router.navigate(['/register-report']);
  }

  buscarInformePorId(): void {
    if (this.searchId) {
      this.reportService.getReportById(+this.searchId).subscribe(
        report => {
          this.reports = [report];
          this.mostrarLista = true;
          this.errorMessage = ''; // Limpiar mensaje de error si se encuentra el informe
        },
        error => {
          this.errorMessage = 'ID no encontrado'; // Mostrar mensaje de error si el ID no se encuentra
          console.error(error);
        }
      );
    }
  }


  buscarInformePorTipoYFecha(): void {
    if (this.searchType && this.searchDate) {
      this.reportService.getReportsByTypeAndDate(this.searchType, this.searchDate).subscribe(
        reports => {
          this.reports = reports;
          this.mostrarLista = true;
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = 'No se encontraron informes con el tipo y fecha especificados'; // Mostrar mensaje de error si no se encuentran informes

        }
      );
    }
  }

  actualizarInformacionInforme(idReport: number): void {
    this.router.navigate(['/update-report', idReport]);
  }

  borrarInforme(idReport: number): void {
    this.reportService.deleteReport(idReport).subscribe(
      () => {
        this.reports = this.reports.filter(report => report.idReport !== idReport);
      },
      error => {
        this.errorMessage = 'ID no encontrado'; // Mostrar mensaje de error si el ID no se encuentra
        console.error(error);
      }
    );
  }
}
