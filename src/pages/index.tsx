import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Layout } from "../components/layout"
import { Image } from "../components/image"
import { SEO } from "../components/seo"
import { I18nString, I18nPicture, I18nTextCta } from "../utils/i18n"
import { PresentationSection } from "../components/presentation-section"

export interface IPresentationSection {
	sectionTitle: I18nString
	sectionDescription: I18nString
	mockupsPicture: I18nPicture
	desktopBackgroundImage: I18nPicture
	mobileBackgroundImage: I18nPicture
}

export interface ICommonComponents {
	requestInviteCta: I18nTextCta
}
interface IHomePage {
	presentationSection: IPresentationSection
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
							src
							alt {
								en
								fr
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
							src
						}
						mobileBackgroundImage {
							alt {
								en
								fr
							}
							src
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
		}
	`)

	const { homePage, commonComponents } = data.dataJson
	const { presentationSection } = homePage
	const {
		sectionTitle,
		sectionDescription,
		mockupsPicture,
		desktopBackgroundImage,
		mobileBackgroundImage,
	} = presentationSection
	const { requestInviteCta } = commonComponents

	return (
		<Layout>
			<SEO title="Home" />
			<PresentationSection
				sectionTitle={sectionTitle}
				sectionDescription={sectionDescription}
				mockupsPicture={mockupsPicture}
				desktopBackgroundImage={desktopBackgroundImage}
				mobileBackgroundImage={mobileBackgroundImage}
				requestInviteCta={requestInviteCta}
			/>
			{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
			<Image />
		</div> */}
		</Layout>
	)
}

export default IndexPage
