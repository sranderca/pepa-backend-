export default ({ env }: any) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337), // Railway inyecta el puerto aquí automáticamente
  app: {
    keys: env.array("APP_KEYS"),
  },
});
