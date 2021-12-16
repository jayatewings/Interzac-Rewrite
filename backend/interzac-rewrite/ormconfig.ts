import { executionAsyncResource } from 'async_hooks';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456789',
  database: 'jayatedb2',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations:['dist/src/db/migrations/*.js'],
  cli:{
      migrationsDir:'src/db/migrations'
  }
};
export default config;



// list of commands to execution
// these all commands execute inside the folder of interzac-rewrite
// 1 npm install.
// 2 npm install --save @nestjs/typeorm typeorm mysql2
// 3 npm run migration:generate -- interzac_backend_migration   ====to generate migration
// 4 npm run migration:run                                      === to run migration
//npm run start to start backend