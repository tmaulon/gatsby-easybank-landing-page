/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer, ISocialNetwork, IPagesEdges } from "./footer"
import styled from "styled-components"
import { Colors } from "../utils/colors"
import { I18nString, I18nTextCta, I18nCta } from "../utils/i18n"
import { MobileNavigation } from "./common/mobileNavigation"

export interface ICommonComponents {
	logo: I18nCta
	socialNetworks: ISocialNetwork[]
	requestInviteCta: I18nTextCta
}
interface ILayoutDataJson {
	commonComponents: ICommonComponents
}
interface ILayoutData {
	site: { siteMetadata: { title: I18nString } }
	allFile: IPagesEdges
	dataJson: ILayoutDataJson
}
export const Layout = ({ children }: { children: ReactNode }) => {
	const data: ILayoutData = useStaticQuery(graphql`
		query HeaderAndFooterQueryAndSiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
			allFile(filter: { sourceInstanceName: { eq: "pages" }, name: { regex: "/^(?!index|404).*$/" } }) {
				edges {
					node {
						id
						name
					}
				}
			}
			dataJson {
				commonComponents {
					logo {
						title {
							fr
							en
						}
						link
					}
					socialNetworks {
						icon {
							alt {
								fr
								en
							}
							src {
								childImageSharp {
									fluid(maxWidth: 40) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
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
		}
	`)
	const { dataJson, site, allFile } = data
	const { commonComponents } = dataJson
	const { logo, socialNetworks, requestInviteCta } = commonComponents

	const [mobileNavigationIsOpen, setMobileNavigationIsOpen] = useState(false)

	return (
		<>
			<Header
				requestInviteCta={requestInviteCta}
				mobileNavigationIsOpen={mobileNavigationIsOpen}
				setMobileNavigationIsOpen={setMobileNavigationIsOpen}
			/>
			<MobileNavigation
				mobileNavigationIsOpen={mobileNavigationIsOpen}
				setMobileNavigationIsOpen={setMobileNavigationIsOpen}
			/>
			<StyledMain>{children}</StyledMain>
			<Footer logo={logo} socialNetworks={socialNetworks} requestInviteCta={requestInviteCta} allPages={allFile} />
		</>
	)
}
const StyledMain = styled.main`
	background-color: ${Colors.neutral.veryLightGray};
	overflow: hidden;
	padding-top: 80px;
`
