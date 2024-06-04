import {PatientInterface} from "../patient/patient.interface";

export interface HabitacionInterface {
  idroom: number;
  estado: string;
  idpatient: PatientInterface | null;
}
