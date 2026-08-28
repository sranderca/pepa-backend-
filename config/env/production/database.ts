import { parse } from "pg-connection-string";

export default ({ env }: any) => {
  // Le ponemos un '' de respaldo por si la variable no está lista en el momento del build
  const dbUrl = env("DATABASE_URL", "");

  // Si hay URL la desarmamos, si no, pasamos datos vacíos para que no estalle
  const config = dbUrl
    ? parse(dbUrl)
    : { host: "", port: 5432, database: "", user: "", password: "" };

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        ssl: {
          rejectUnauthorized: false,
        },
      },
      debug: false,
    },
  };
};
