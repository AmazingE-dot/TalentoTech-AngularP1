export interface ProductoInterface {
  nombre: string;
  SKU: string;
  cantidad: number;
  precio: number;
  createdAt: Date;
}

export interface CrearProductoInterface {
  readonly _id: string;
  nombre: string;
  SKU: string;
  cantidad: number;
  precio: number;
  distribuidor: DistribuidorInterface;
}

export interface DistribuidorInterface {
  nit: string;
  razonSocial: string;
  telefono: number;
  direccion: string;
}
