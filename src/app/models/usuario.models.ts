export class UsuarioModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public email: string,
    public tipoDocumento: string,
    public numeroDocumento: string,
    public createdAt: Date,
    public rol: string,
    public peso?: string,
    public password?: string,
    public numeroCelular?: number,
  ){}
}
