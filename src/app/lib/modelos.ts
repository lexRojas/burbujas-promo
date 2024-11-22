export type Clientes = {
  cedula: string;
  nombre: string;
  direccion: string;
  correo: string;
  telefono: string;
};

export type ComprasClientes = {
  id: number; // Clave primaria autoincremental
  cedula: string; // Referencia a la tabla user (FOREIGN KEY)
  fecha: string; // Fecha en formato ISO o tipo DATE
  monto_compra: number; // Monto de la compra
  puntos: number; // Puntos generados por la compra
  vencidos: boolean; //indica si los puntos ya vencieron
};

export type PuntosUsadosClientes = {
  id: number; // Clave primaria autoincremental
  cedula: string; // Referencia a la tabla user (FOREIGN KEY)
  fecha: string; // Fecha en formato ISO o tipo DATE
  monto_compra: number; // Monto asociado a la transacción
  puntos_usados: number; // Puntos utilizados en la transacción
};

export type SaldoPuntosClientes = {
  cedula: string;
  nombre: string;
  total_puntos: number;
  total_puntos_usados: number;
  saldo: number;
};

export type Usuario = {
  ID: number; // ID autoincrementado
  Nombre?: string; // Nombre es opcional
  Login: string; // Campo obligatorio
  Password: string; // Campo obligatorio
  Perfil?: string; // Perfil es opcional
  Activo: boolean; // Activo como booleano
};
