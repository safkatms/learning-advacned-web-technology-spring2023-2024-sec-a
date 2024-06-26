import { Product } from 'src/product/entities/product.entity';
import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'labExam',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123',
  entities: [User,Product],
  synchronize: true,
};
