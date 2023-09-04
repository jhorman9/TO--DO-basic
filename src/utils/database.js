import { Sequelize } from "sequelize";
// en la creación de la instancia pasamos los parámetros de configuración
const db = new Sequelize({
  database: "crud_to_do", // nombre de la base de datos en donde realizarás tu conexión 
  username: "postgres", // nombre del usuario propietario de la base de datos
  host: "localhost", // el host donde se encuentra tu base de datos
  port: "5432", // el puerto de conexión a tu base de datos (puede ser igual 5433)
  password: "26105389", // la contraseña del usuario en postgres
  dialect: "postgres", // el dialecto de la base de datos que estamos usando
});

// finalmente exportamos la instancia hecha en la variable db
export default db;