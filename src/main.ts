import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { bootstrap_express } from './bootstrap-express'
import { bootstrap_hmr } from './bootstrap-hmr'

declare const module: any

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1',
	})

	bootstrap_express(app)
	bootstrap_hmr(module, app)

	await app.listen(process.env.PORT || 3000)
}

void bootstrap()
