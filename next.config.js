// // /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   distDir: 'build',
//   images: {
// 	domains: ["http://localhost:1337"],
//   },
// }

module.exports = {
	reactStrictMode: true,
	distDir: 'build',
	images: {
	  domains: ["localhost:1337"],
	  unoptimized: true
	},
  }
