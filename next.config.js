module.exports = {
	async redirects() {
		return [
			{
				source: '/posts',
				destination: '/',
				permanent: true,
			},
		]
	},
}
