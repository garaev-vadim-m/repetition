import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './entity/users/users.entity';
// import { User } from './users/users.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'nest_db',
  synchronize: false,

  entities: [User],
  migrations: ['src/database/migrations/*.ts'],
});
