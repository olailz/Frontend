import {PatientInterface} from "../patient/patient.interface";
import {MedicoInterface} from "../medico/medico.interface";

export interface MedicalHistoryInterface {
  idHistory: number;
  idpatient: PatientInterface;
  id_doctor: MedicoInterface;
  consultationDate: string;
  diagnosis: string;
  treatament: string;
}
