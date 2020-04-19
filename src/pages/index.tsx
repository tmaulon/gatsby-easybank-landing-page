import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Layout } from "../components/layout"
import { Image } from "../components/image"
import { SEO } from "../components/seo"
import { I18nString, I18nPicture, I18nTextCta, I18nFluidPicture } from "../utils/i18n"
import { PresentationSection } from "../components/presentation-section"
import { ReasonsWhySection } from "../components/reasons-why-section"

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
export interface ICommonComponents {
	requestInviteCta: I18nTextCta
}
interface IHomePage {
	presentationSection: IPresentationSection
	theReasonsWhySection: ITheReasonsWhySection
}

interface IDataJson {
	homePage: IHomePage
	commonComponents: ICommonComponents
}
interface IData {
	dataJson: IDataJson
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
						theReasonsWhy
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
		}
	`)

	const { homePage, commonComponents } = data.dataJson
	const { presentationSection, theReasonsWhySection } = homePage
	const { requestInviteCta } = commonComponents

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
				theReasonsWhy={theReasonsWhySection.theReasonsWhy}
			/>
		</Layout>
	)
}

export default IndexPage
