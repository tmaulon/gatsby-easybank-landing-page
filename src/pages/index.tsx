import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Layout, ICommonComponents } from "../components/layout"
import { SEO } from "../components/seo"
import { I18nTextCta } from "../utils/i18n"
import { PresentationSection, IPresentationSection } from "../components/presentation-section"
import { ReasonsWhySection, ITheReasonsWhySection, IReasonsWhyEdges } from "../components/reasons-why-section"
import { BlogSection, IBlogSection, IAllBlogPostsJson } from "../components/blog-section"

interface IHomePage {
	presentationSection: IPresentationSection
	theReasonsWhySection: ITheReasonsWhySection
	blogSection: IBlogSection
}
interface IDataJson {
	homePage: IHomePage
	commonComponents: ICommonComponents
}
interface IData {
	dataJson: IDataJson
	allReasonsWhyJson: IReasonsWhyEdges
	allBlogPostsJson: IAllBlogPostsJson
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
					logo {
						title {
							fr
							en
						}
						link
					}
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
