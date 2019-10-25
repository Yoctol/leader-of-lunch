const knex = require('knex');

class DB {
  constructor() {
    this.knexConfig = require('./knexfile')[process.env.ENV];
    this.databaseName = this.knexConfig.connection.database;
    this.knexConfigWithoutDatabase = {
      client: this.knexConfig.client,
      connection: {
        user: this.knexConfig.connection.user,
        password: this.knexConfig.connection.password,
      },
    };
  }

  async reset() {
    await this.dropDatabase(this.knexConfigWithoutDatabase, this.databaseName);
    await this.createDatabase(
      this.knexConfigWithoutDatabase,
      this.databaseName
    );
    await this.run_migrate(this.knexConfig);
  }

  async run_migrate(config) {
    const db = knex(config);
    try {
      await db.migrate.latest();
      console.log(`migrate 成功`);
    } catch (error) {
      console.log(`migrate 失敗～: ${error}`);
    } finally {
      db.destroy(() => {
        console.log('連線中斷');
      });
    }
  }

  async executeSqlAndDesconnect(config, command) {
    const db = knex(config);
    try {
      const result = await db.raw(command);
      console.log(`成功～: ${result}`);
      return result;
    } catch (error) {
      console.log(`失敗～: ${error}`);
    } finally {
      db.destroy(() => {
        console.log('連線中斷');
      });
    }
  }

  async createDatabase(config, databaseName) {
    console.log('嘗試建立資料庫...');
    await this.executeSqlAndDesconnect(
      config,
      `CREATE DATABASE ${databaseName}`
    );
  }

  async dropDatabase(config, databaseName) {
    console.log('嘗試刪除資料庫...');
    await this.executeSqlAndDesconnect(config, `DROP DATABASE ${databaseName}`);
  }
}

new DB().reset();
