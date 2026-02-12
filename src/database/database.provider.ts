import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'Aa123456789@',
        database: process.env.POSTGRES_DB || 'nestjs',
      });

      return dataSource.initialize();
    },
  },
];
