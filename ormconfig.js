const config = {
  type: 'postgres',
  url: process.env.POSTGRESQL_URL,
  synchronize: false,
  logging: process.env.TYPEORM_LOGGING == 'true',
  entities: ['dist/entity/**/*.js'],
  migrations: ['dist/migration/**/*.js'],
  subscribers: ['dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
};

module.exports = config;
