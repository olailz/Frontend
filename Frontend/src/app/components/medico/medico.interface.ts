export interface EspecialityInterface {
  idspeciality: number;
  speciality: string;
}

export interface MedicoInterface {
  id: number;
  especiality: EspecialityInterface;
  name: string;
  lastname: string;
  phone: number;
  adress: string;
  email: string;
}
