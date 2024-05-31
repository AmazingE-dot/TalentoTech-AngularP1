import { DistribuidorInterface } from "../interface/products.interface";

export class ProductosModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public SKU: string,
    public cantidad: number,
    public precio: number,
    public distribuidor: DistribuidorInterface,
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
