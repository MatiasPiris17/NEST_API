import { ConfigModule, ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

ConfigModule.forRoot({
  envFilePath: `.env`,
  // envFilePath: `.${process.env.NODE_ENV}.env`,
  // 1- cambiarn el script en package.json => "start:dev": "set NODE_ENV=develop && nest start --watch",
  // 2- cambiar el archivo ".env" a ".develop.env"
  //"m:gen": "export NODE_ENV=develop && npm run orm:init migration:generate",
  //"m:run": "export NODE_ENV=develop && npm run orm:init migration:run"
});

const configService = new ConfigService();

export const DataSourceConfig: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USER'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
  namingStrategy: new SnakeNamingStrategy(),
};

export const AppDS = new DataSource(DataSourceConfig);
