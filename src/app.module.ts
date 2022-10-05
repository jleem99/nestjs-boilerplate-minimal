import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ormconfig } from 'ormconfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [`.${process.env.NODE_ENV}.env`, '.env'],
		}),
		TypeOrmModule.forRoot(ormconfig),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
