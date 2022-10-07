import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import dotenv from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'
import { isDev } from 'src/common/env-utils'
import { SnakeNamingStrategy } from 'src/common/snake-naming.strategy'

dotenv.config()

const dataSourceConfig: DataSourceOptions = {
	type: 'mysql',
	host: process.env.DB_HOSTNAME,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	namingStrategy: new SnakeNamingStrategy(),
	entities: [],
	migrations: [__dirname + '/src/database/migrations/*.ts'],
	charset: 'utf8mb4',
	synchronize: false,
	logging: false,
}

export const ormconfig: TypeOrmModuleOptions = {
	...dataSourceConfig,
	autoLoadEntities: true,
	keepConnectionAlive: isDev(),
}

export const dataSource = new DataSource(dataSourceConfig)

export default ormconfig
