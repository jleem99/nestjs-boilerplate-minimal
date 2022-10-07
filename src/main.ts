import { VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { bootstrap_hmr } from './bootstrap-hmr'

declare const module: any

async function bootstrap() {
	const app = await NestFactory.create(AppModule)

	app.enableVersioning({
		type: VersioningType.URI,
		defaultVersion: '1',
	})

	await app.listen(process.env.PORT || 3000)
	bootstrap_hmr(module, app)
}

void bootstrap()
