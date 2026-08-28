import { parse } from "pg-connection-string";

export default ({ env }: any) => {
  const dbUrl = env("DATABASE_URL");

  // Si por alguna razón sigue llegando vacía, esto lo imprimirá en los logs
  if (!dbUrl) {
    console.error("⚠️ ALERTA: La DATABASE_URL está llegando vacía a Strapi");
  }

  const config = parse(dbUrl || "");

  return {
    connection: {
      client: "postgres",
      connection: {
        host: config.host,
        port: config.port ? Number(config.port) : 5432,
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
