module.exports = {
	siteMetadata: {
		title: `Easybank Landing Page Project With Gatsby`,
		description: `Easybank landing page made with Gatsby.`,
		author: `tmaulon`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				isTSX: true, // defaults to false
				// jsxPragma: `jsx`, // defaults to "React"
				allExtensions: true, // defaults to false
			},
		},
		// {
		// 	resolve: `gatsby-source-filesystem`,
		// 	options: {
		// 		name: `src`,
		// 		path: `./data/images`,
		// 	},
		// },
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `./data`,
			},
		},
		`gatsby-transformer-json`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-easybank-landing-page`,
				short_name: `easybank`,
				description: `Easybank landing page project made with Gatsby`,
				lang: `fr`,
				start_url: `/`,
				background_color: `#f3f4f6`,
				theme_color: `#f3f4f6`,
				display: `standalone`,
				// icon: `data/images/logo.svg`, // This path is relative to the root of the site.
				icons: [
					{
						src: `static/favicons/apple-icon-120.png`,
						sizes: `120x120`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-icon-152.png`,
						sizes: `152x152`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-icon-167.png`,
						sizes: `167x167`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-icon-180.png`,
						sizes: `180x180`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1125-2436.png`,
						sizes: `1125x2436`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1136-640.png`,
						sizes: `1136x640`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1242-2208.png`,
						sizes: `1242x2208`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1242-2688.png`,
						sizes: `1242x2688`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1334-750.png`,
						sizes: `1334x750`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1536-2048.png`,
						sizes: `1536x2048`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1668-2224.png`,
						sizes: `1668x2224`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1668-2388.png`,
						sizes: `2668x2388`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-1792-828.png`,
						sizes: `1792x828`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2048-1536.png`,
						sizes: `2048x1536`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2048-2732.png`,
						sizes: `2048x2732`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2208-1242.png`,
						sizes: `2208x1242`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2224-1668.png`,
						sizes: `2224x1668`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2388-1668.png`,
						sizes: `2388x1668`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2436-1125.png`,
						sizes: `2436x1125`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2688-1242.png`,
						sizes: `2688x1242`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-2732-2048.png`,
						sizes: `2732x2048`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-640-1136.png`,
						sizes: `640x1136`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-750-1334.png`,
						sizes: `750x1334`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-splash-828-1792.png`,
						sizes: `828x1792`,
						type: `image/png`,
					},
					{
						src: `static/favicons/favicon-32x32.png`,
						sizes: `32x32`,
						type: `image/png`,
					},
					{
						src: `static/favicons/manifest-icon-192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `static/favicons/manifest-icon-512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-icon-120.png`,
						sizes: `120x120`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-icon-120.png`,
						sizes: `120x120`,
						type: `image/png`,
					},
					{
						src: `static/favicons/apple-icon-120.png`,
						sizes: `120x120`,
						type: `image/png`,
					},
				],
				cache_busting_mode: "none",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-offline",
			options: {
				workboxConfig: {
					globPatterns: ["**/*"],
				},
			},
		},
	],
}
