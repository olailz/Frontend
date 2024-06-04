import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientComponent } from './components/patient/patient.component';
import { FormPatientComponent } from './components/patient/form.patient.component';
import { MedicoComponent } from './components/medico/medico.component';
import { FormMedicoComponent } from './components/medico/form.medico.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormReportesComponent } from './components/reportes/form.reportes.component';
import {FormHabitacionComponent} from "./components/habitaciones/form.habitaciones.component";
import {HabitacionComponent} from "./components/habitaciones/habitaciones.component";
import {FormHistorialMedicoComponent} from "./components/historialmedico/form.historialmedico.component";
import {HistorialMedicoComponent} from "./components/historialmedico/historialmedico.component";
import {FormAppoimentComponent} from "./components/appoiment/form.appoiment.component";
import {AppoimentComponent} from "./components/appoiment/appoiment.component";
import {AppoimentService} from "./components/appoiment/appoiment.service";
import {MedicoService} from "./components/medico/medico.service";
import {PatientService} from "./components/patient/patient.service";
import {HistorialMedicoService} from "./components/historialmedico/historialmedico.service";


@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    FormPatientComponent,
    MedicoComponent,
    FormMedicoComponent,
    ReportesComponent,
    FormReportesComponent,
    FormHabitacionComponent,
    HabitacionComponent,
    HistorialMedicoComponent,
    FormHistorialMedicoComponent,
    AppoimentComponent,
    FormAppoimentComponent
  ],

  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [AppoimentService,MedicoService,PatientService,HistorialMedicoService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
