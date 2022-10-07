import { NestExpressApplication } from '@nestjs/platform-express'
import helmet from 'helmet'
import hpp from 'hpp'
import { isProd } from './common/env-utils'

export function bootstrap_express(app: NestExpressApplication) {
	if (isProd()) {
		// app.enable('trust proxy')
		app.use(helmet({ contentSecurityPolicy: false }))
		app.use(hpp())
		/** You can handle rate limit on reverse proxy */
		// app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }))
	}
}
