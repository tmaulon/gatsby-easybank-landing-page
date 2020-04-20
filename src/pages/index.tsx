import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Layout } from "../components/layout"
import { Image } from "../components/image"
import { SEO } from "../components/seo"
import { I18nString, I18nPicture, I18nTextCta, I18nFluidPicture } from "../utils/i18n"
import { PresentationSection } from "../components/presentation-section"
import { ReasonsWhySection } from "../components/reasons-why-section"
import { BlogSection } from "../components/blog-section"

export interface IPresentationSection {
	sectionTitle: I18nString
	sectionDescription: I18nString
	mockupsPicture: I18nFluidPicture
	desktopBackgroundImage: I18nFluidPicture
	mobileBackgroundImage: I18nFluidPicture
}
export interface ITheReasonsWhySection {
	sectionTitle: I18nString
	sectionDescription: I18nString
	theReasonsWhy: string[]
}
export interface IBlogSection {
	sectionTitle: I18nString
}
export interface ICommonComponents {
	requestInviteCta: I18nTextCta
}
interface IHomePage {
	presentationSection: IPresentationSection
	theReasonsWhySection: ITheReasonsWhySection
	blogSection: IBlogSection
}

interface IDataJson {
	homePage: IHomePage
	commonComponents: ICommonComponents
}
export interface IReasonWhy {
	id: string
	order: number
	title: I18nString
	description: I18nString
	picture: I18nFluidPicture
}
interface IReasonWhyNode {
	node: IReasonWhy
}
export interface IReasonsWhyEdges {
	edges: IReasonWhyNode[]
}
interface IData {
	dataJson: IDataJson
	allReasonsWhyJson: IReasonsWhyEdges
	allBlogPostsJson: IAllBlogPostsJson
}

export interface IAllBlogPostsJson {
	edges: IBlogPostNode[]
}
export interface IBlogPostNode {
	node: IBlogPost
}
export interface IBlogPost {
	date: string
	id: string
	author: string
	description: I18nString
	title: I18nString
	picture: I18nFluidPicture
}

const IndexPage = () => {
	const data: IData = useStaticQuery(graphql`
		query MyQuery {
			dataJson {
				homePage {
					presentationSection {
						desktopBackgroundImage {
							alt {
								en
								fr
							}
							src {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
						sectionDescription {
							fr
							en
						}
						sectionTitle {
							fr
							en
						}
						mockupsPicture {
							alt {
								en
								fr
							}
							src {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
						mobileBackgroundImage {
							alt {
								en
								fr
							}
							src {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}

					theReasonsWhySection {
						sectionDescription {
							fr
							en
						}
						sectionTitle {
							fr
							en
						}
					}

					blogSection {
						sectionTitle {
							en
							fr
						}
					}
				}

				commonComponents {
					requestInviteCta {
						link
						text {
							en
							fr
						}
						title {
							en
							fr
						}
					}
				}
			}
			allReasonsWhyJson(sort: { fields: order, order: ASC }) {
				edges {
					node {
						id
						order
						title {
							en
							fr
						}
						description {
							en
							fr
						}
						picture {
							alt {
								en
								fr
							}
							src {
								childImageSharp {
									fluid {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
			}

			allBlogPostsJson(sort: { fields: date, order: DESC }) {
				edges {
					node {
						date
						id
						author
						description {
							en
							fr
						}
						title {
							fr
							en
						}
						picture {
							alt {
								en
								fr
							}
							src {
								childImageSharp {
									fluid {
										srcSetWebp
									}
								}
							}
						}
					}
				}
			}
		}
	`)

	const { dataJson, allReasonsWhyJson, allBlogPostsJson } = data
	const { homePage, commonComponents } = dataJson
	const { presentationSection, theReasonsWhySection, blogSection } = homePage
	const { requestInviteCta } = commonComponents

	console.log("theReasonsWhySection.theReasonsWhy : ", theReasonsWhySection.theReasonsWhy)
	console.log("reasonsWhy : ", allReasonsWhyJson)

	return (
		<Layout>
			<SEO title="Home" />
			<PresentationSection
				sectionTitle={presentationSection.sectionTitle}
				sectionDescription={presentationSection.sectionDescription}
				mockupsPicture={presentationSection.mockupsPicture}
				desktopBackgroundImage={presentationSection.desktopBackgroundImage}
				mobileBackgroundImage={presentationSection.mobileBackgroundImage}
				requestInviteCta={requestInviteCta}
			/>
			<ReasonsWhySection
				sectionTitle={theReasonsWhySection.sectionTitle}
				sectionDescription={theReasonsWhySection.sectionDescription}
				allReasonsWhyJson={allReasonsWhyJson}
			/>
			<BlogSection sectionTitle={blogSection.sectionTitle} allBlogPostsJson={allBlogPostsJson} />
		</Layout>
	)
}

export default IndexPage
