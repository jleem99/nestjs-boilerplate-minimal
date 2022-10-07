import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ormconfig } from 'ormconfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { envFilePath } from './common/env-utils'

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath }),
		TypeOrmModule.forRoot(ormconfig),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
