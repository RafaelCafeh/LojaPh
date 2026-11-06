import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Tarefa } from './tarefas/entities/tarefa.entity';
import { User } from './users/entities/user.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'todo',
  password: process.env.DB_PASS || 'todo',
  database: process.env.DB_NAME || 'todo',
  entities: [Tarefa, User],
  synchronize: false,
};

const dataSource = new DataSource({
  ...dataSourceOptions,
  migrations: ['src/migrations/*.ts'],
});

export default dataSource;