import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientComponent } from './components/patient/patient.component';
import { FormPatientComponent } from './components/patient/form.patient.component';
import { MedicoComponent } from './components/medico/medico.component';
import { FormMedicoComponent } from './components/medico/form.medico.component';
import { FormReportesComponent } from "./components/reportes/form.reportes.component";
import { ReportesComponent } from "./components/reportes/reportes.component";
import {FormHabitacionComponent} from "./components/habitaciones/form.habitaciones.component";
import {HabitacionComponent} from "./components/habitaciones/habitaciones.component";
import {FormHistorialMedicoComponent} from "./components/historialmedico/form.historialmedico.component";
import {HistorialMedicoComponent} from "./components/historialmedico/historialmedico.component";
import {AppoimentComponent} from "./components/appoiment/appoiment.component";
import {FormAppoimentComponent} from "./components/appoiment/form.appoiment.component";

const routes: Routes = [
  { path: 'patients', component: PatientComponent },
  { path: 'register', component: FormPatientComponent },
  { path: 'update/:id', component: FormPatientComponent },
  { path: 'medicos', component: MedicoComponent },
  { path: 'register-medico', component: FormMedicoComponent },
  { path: 'update-medico/:id', component: FormMedicoComponent },
  { path: 'reports', component: ReportesComponent },
  { path: 'register-report', component: FormReportesComponent },
  { path: 'update-report/:id', component: FormReportesComponent },
  { path: 'habitaciones', component: HabitacionComponent },
  { path: 'update-habitacion/:id', component: FormHabitacionComponent },
  { path: 'historiales-medicos', component: HistorialMedicoComponent },
  { path: 'register-historial-medico', component: FormHistorialMedicoComponent },
  { path: 'update-historial-medico/:id', component: FormHistorialMedicoComponent },
  { path: 'appointments', component: AppoimentComponent },
  { path: 'register-appoiment', component: FormAppoimentComponent },
  { path: 'update-appoiment/:id', component: FormAppoimentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }
