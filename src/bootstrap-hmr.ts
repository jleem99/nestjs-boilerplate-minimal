/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { INestApplication } from '@nestjs/common'

export function bootstrap_hmr(module: any, app: INestApplication) {
	if (module.hot) {
		module.hot.accept()
		module.hot.dispose(() => app.close())
	}
}
