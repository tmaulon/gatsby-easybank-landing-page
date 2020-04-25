import React from "react"
import styled from "styled-components"
import { Button } from "./common/button"
import { Link } from "gatsby"
import { I18nTextCta, I18nCta, I18nFluidPicture, I18nString } from "../utils/i18n"
import { Logo } from "./common/icons"
import { Colors } from "../utils/colors"
import Image from "gatsby-image"
import { Wrapper } from "./container"
import { capitalisePageName } from "../utils/utils"

export interface ISocialNetwork {
	icon: I18nFluidPicture
	title: I18nString
	link: string
}
export interface IPage {
	id: string
	name: string
}
export interface IPageNode {
	node: IPage
}
export interface IPagesEdges {
	edges: IPageNode[]
}
export const Footer = ({
	logo,
	socialNetworks,
	allPages,
	requestInviteCta,
}: {
	logo: I18nCta
	socialNetworks: ISocialNetwork[]
	allPages: IPagesEdges
	requestInviteCta: I18nTextCta
}) => {
	return (
		<StyledFooter>
			<StyledContainer>
				<Col>
					<Link
						to={logo.link}
						title={logo.title.en}
						style={{
							color: `white`,
							textDecoration: `none`,
						}}
					>
						<StyledLogo fill={Colors.neutral.white} />
					</Link>
					<SocialNetworksList>
						{socialNetworks.map((socialNetwork, index) => (
							<SocialNetworkItem key={`${socialNetwork.link}-${index}`}>
								<SocialNetworkLink
									href={socialNetwork.link}
									title={socialNetwork.title.en}
									target="_blank"
									rel="noopener noreferrer nofollow"
								>
									<SocialNetworkPicture
										fluid={socialNetwork.icon.src.childImageSharp.fluid}
										alt={socialNetwork.icon.alt.en}
									/>
								</SocialNetworkLink>
							</SocialNetworkItem>
						))}
					</SocialNetworksList>
				</Col>
				<Col>
					<FooterNav>
						<FooterNavList>
							{allPages.edges.map(({ node: page }) => (
								<FooterNavItem key={page.id}>
									<FooterNavLink to={`/${page.name}/`}>{capitalisePageName(page.name)}</FooterNavLink>
								</FooterNavItem>
							))}
						</FooterNavList>
					</FooterNav>
				</Col>
				<Col>
					<StyledRequestInviteLink title={requestInviteCta.title.en} href={requestInviteCta.link}>
						<Button aria-label="Footer Request Invite CTA">{requestInviteCta.text.en}</Button>
					</StyledRequestInviteLink>
					<RightReservedParagraph>
						© {new Date().getFullYear()}
						{` `}Easybank. All Rights Reserved
					</RightReservedParagraph>
				</Col>
			</StyledContainer>
		</StyledFooter>
	)
}
const StyledContainer = styled(Wrapper)`
	display: grid;
	grid-gap: 30px;
	@media screen and (min-width: 768px) {
		grid-template-columns: 3fr 4fr 3fr;
	}
`
const StyledLogo = styled(Logo)`
	& path:first-of-type {
		fill: ${Colors.neutral.white};
	}
`

const StyledFooter = styled.footer`
	padding: 40px 0;
	background-color: ${Colors.primary.darkBlue};
`
const Col = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	@media screen and (min-width: 768px) {
		align-items: flex-start;
	}
	&:last-of-type {
		@media screen and (min-width: 768px) {
			align-items: flex-end;
		}
	}
`
const SocialNetworksList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 30px;
	@media screen and (min-width: 768px) {
		justify-content: flex-start;
	}
`
const SocialNetworkItem = styled.li`
	width: 100%;
	max-width: 25px;
	padding: 0;
	margin: 0;
	&:not(:last-of-type) {
		margin-right: 16px;
	}
`
const SocialNetworkLink = styled.a`
	width: 100%;
	display: block;
`
const SocialNetworkPicture = styled(Image)`
	width: auto;
	height: auto;
	min-height: 25px;
`
const FooterNav = styled.nav`
	height: 100%;
`
const FooterNavList = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 0 30px;
	justify-items: center;
	@media screen and (min-width: 768px) {
		justify-items: flex-start;
	}
`
const FooterNavItem = styled.li`
	margin-bottom: 0;
`
const FooterNavLink = styled(Link)`
	color: ${Colors.neutral.white};
	text-decoration: none;
`
const StyledRequestInviteLink = styled.a`
	display: block;
	text-align: center;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const RightReservedParagraph = styled.p`
	color: ${Colors.neutral.grayishBlue};
	margin-top: 30px;
	margin-bottom: 0;
`
