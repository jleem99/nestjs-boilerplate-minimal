import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import dotenv from 'dotenv'
import { DataSource, DataSourceOptions } from 'typeorm'

dotenv.config()

const dataSourceConfig: DataSourceOptions = {
	type: 'mysql',
	host: process.env.DB_HOSTNAME,
	port: +process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [],
	migrations: [__dirname + '/src/migrations/*.ts'],
	charset: 'utf8mb4',
	synchronize: false,
	logging: false,
}

export const ormconfig: TypeOrmModuleOptions = {
	...dataSourceConfig,
	autoLoadEntities: true,
	keepConnectionAlive: true,
}

export const dataSource = new DataSource(dataSourceConfig)

export default ormconfig
