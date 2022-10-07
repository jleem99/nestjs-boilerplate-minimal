export const isProd = () => /^[Pp]rod(uction)?$/.test(process.env.NODE_ENV ?? '')
export const isDev = () => /^[Dd]ev(elopment)?$/.test(process.env.NODE_ENV ?? '')

export const envFilePath = isProd()
	? ['.env.production.local', '.env.production', '.env.local', '.env']
	: ['.env.development.local', '.env.development', '.env.local', '.env']
