import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'labExam',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  entities: [],
  synchronize: true,
};
