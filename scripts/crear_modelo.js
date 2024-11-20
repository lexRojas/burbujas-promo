import { createClient } from "@libsql/client";

// const TURSO_URL = process.env.TURSO_URL || '';
// const TURSO_TOKEN = process.env.TURSO_TOKEN || '';

const TURSO_URL = "libsql://soda-lexrojas.turso.io";
const TURSO_TOKEN =
  "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MzIwNTQ5NjgsImlkIjoiZjIxYzBlNDgtZDM5Mi00NTcyLTlhYTgtZTE3YjVkNzllMzk4In0.AhkafwhFqlCtwEWABA-0vJHLe6Sz8OlBRfvUzUvhiIB2vlSyBjaFFEe0gKPZVi40PMKoP_GMOUEqmIaRuEaJDg";

// Función para crear la conexión a la base de datos Turso
export const getTursoClient = () => {
  if (!TURSO_URL || !TURSO_TOKEN) {
    throw new Error(
      "La URL o el token de la base de datos no están configurados."
    );
  }

  try {
    const client = createClient({
      url: TURSO_URL,
      authToken: TURSO_TOKEN,
    });
    return client;
  } catch (error) {
    console.error("Error al crear la conexión a la base de datos:", error);
    throw new Error("No se pudo conectar a la base de datos");
  }
};

export const createUserTable = async () => {
  const client = getTursoClient();

  const createTableQuery = `
      CREATE TABLE IF NOT EXISTS user (
        cedula INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        direccion TEXT NOT NULL,
        correo TEXT NOT NULL,
        telefono INTEGER NOT NULL
      );
    `;

  try {
    const result = await client.execute(createTableQuery);

    console.log("Tabla User creada o ya existe:", result);
    return result;
  } catch (error) {
    console.error("Error al crear la tabla User:", error);
    throw error;
  }
};

try {
  console.log("------------------");
  console.log(TURSO_TOKEN);
  console.log(TURSO_URL);
  console.log("------------------");

  createUserTable();
} catch (e) {
  console.log("algo salio mal" + e);
}
