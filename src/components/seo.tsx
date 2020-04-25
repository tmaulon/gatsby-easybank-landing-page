/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export function SEO({
	description,
	lang,
	meta,
	title,
}: {
	description?: string
	lang?: string
	meta?: []
	title: string
}) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={
				meta
					? [
							{
								name: `description`,
								content: metaDescription,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: site.siteMetadata.author,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
					  ].concat(meta)
					: [
							{
								name: `description`,
								content: metaDescription,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								name: `twitter:card`,
								content: `summary`,
							},
							{
								name: `twitter:creator`,
								content: site.siteMetadata.author,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
					  ]
			}
		>
			{/* favicon and icons */}
			<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
			<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
			<link rel="apple-touch-icon" sizes="512x512" href="/icon-512x512.png" />
			<link rel="icon" type="image/png" sizes="36x36" href="/android-icon-36x36.png" />
			<link rel="icon" type="image/png" sizes="48x48" href="/android-icon-48x48.png" />
			<link rel="icon" type="image/png" sizes="72x72" href="/android-icon-72x72.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/android-icon-96x96.png" />
			<link rel="icon" type="image/png" sizes="144x144" href="/android-icon-144x144.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/manifest.json" />
			<meta name="theme-color" content="#f3f4f6" />
			<meta name="msapplication-navbutton-color" content="#f3f4f6" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-title" content="Easybank" />
			<meta name="apple-mobile-web-app-status-bar-style" content="black" />
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2048-2732.png"
				media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2732-2048.png"
				media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1668-2388.png"
				media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2388-1668.png"
				media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1668-2224.png"
				media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2224-1668.png"
				media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1536-2048.png"
				media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2048-1536.png"
				media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1242-2688.png"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2688-1242.png"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1125-2436.png"
				media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2436-1125.png"
				media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-828-1792.png"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1792-828.png"
				media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1242-2208.png"
				media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-2208-1242.png"
				media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-750-1334.png"
				media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1334-750.png"
				media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-640-1136.png"
				media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
			/>
			<link
				rel="apple-touch-startup-image"
				href="/apple-splash-1136-640.png"
				media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@100;300;400;600;700&display=swap"
				rel="stylesheet"
			/>
		</Helmet>
	)
}
