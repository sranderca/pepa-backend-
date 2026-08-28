import { parse } from "pg-connection-string";

export default ({ env }: any) => {
  const dbUrl = env("DATABASE_URL", "");
  const config = dbUrl
    ? parse(dbUrl)
    : { host: "", port: 5432, database: "", user: "", password: "" };

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: Number(config.port) || 5432,
        database: config.database,
        user: config.user,
        password: config.password,
        // Eliminamos el bloque SSL porque Railway interno no lo requiere
      },
      debug: false,
    },
  };
};
