const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withFonts = require('next-fonts');

const nextConfig = {
	trailingSlash: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
};

module.exports = withPlugins(
	[
		[
			withOptimizedImages,
			{
				mozjpeg: {
					quality: 90,
				},
				webp: {
					preset: 'default',
					quality: 90,
				},
			},
		],
		withFonts,
	],
	nextConfig
);
