const commonConfig = {
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "",
   password: "",
   database: "lol",
   synchronize: true,
   logging: false
 };

 const srcConfig = {
   entities: ["src/entity/**/*.ts"],
   migrations: ["src/migration/**/*.ts"],
   subscribers: ["src/subscriber/**/*.ts"],
   cli: {
     entitiesDir: "src/entity",
     migrationsDir: "src/migration",
     subscribersDir: "src/subscriber"
   },
   ...commonConfig
 };

 const distConfig = {
   entities: ["dist/entity/**/*.js"],
   migrations: ["dist/migration/**/*.js"],
   subscribers: ["dist/subscriber/**/*.js"],
   cli: {
     entitiesDir: "dist/entity",
     migrationsDir: "dist/migration",
     subscribersDir: "dist/subscriber"
   },
   ...commonConfig
 };

 module.exports = process.env.TS_NODE ? srcConfig : distConfig;