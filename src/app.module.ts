import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ormconfig } from 'ormconfig'
import { AppController } from './app.controller'
import { AppService } from './app.service'

const envFilePath = /^prod|Prod|production|Production$/.test(process.env.NODE_ENV ?? '')
	? ['.env.production.local', '.env.production', '.env.local', '.env']
	: ['.env.development.local', '.env.development', '.env.local', '.env']

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath }),
		TypeOrmModule.forRoot(ormconfig),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
