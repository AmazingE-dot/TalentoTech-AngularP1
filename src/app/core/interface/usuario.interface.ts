export interface crearUsuarioInterface {
  nombre: string;
  email: string;
  tipoDocumento: string;
  numeroDocumento: string;
  password?: string;
  rol?: string;
  numeroCelular?: number;
  peso?: string;
  fechaNacimiento?: Date;
}
