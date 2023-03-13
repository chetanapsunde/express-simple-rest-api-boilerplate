module.exports = {
  isProduction: process.env.NODE_ENV === 'production',
  isDev: process.env.NODE_ENV === 'development',
  isSilent: process.env.SILENT,
  port: process.env.PORT || 3355,
  pg: {
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    database: process.env.PG_DB,
    password: process.env.PG_PASS,
    port: process.env.PG_PORT,
  },
};
