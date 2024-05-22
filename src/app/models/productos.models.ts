export class ProductosModel {
  constructor(
    public readonly _id: string,
    public nombre: string,
    public SKU: string,
    public cantidad: string,
    public precio: number
  ) {}
}
