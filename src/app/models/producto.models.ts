export class ProductosModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public SKU: string,
    public cantidad: string,
    public precio: number,
    public distribuidor: {
      nit: string;
      razonSocial: string;
      telefono: number;
      direccion: string;
    },
    public createdAt: Date,
    public usuario: {
      _id: string;
      nombre: string;
      email: string;
    },
    public opiniones?: {
      comentarios: string;
      calificacion: number;
    },
  ) {}
}
