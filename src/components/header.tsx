import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Colors } from "../utils/colors"
import { Logo, HamburgerMenuIcon, CloseMenuIcon } from "./common/icons"
import { Wrapper } from "./container"
import { Button } from "./common/button"
import { I18nTextCta } from "../utils/i18n"

export const Header = ({
	requestInviteCta,
	mobileNavigationIsOpen,
	setMobileNavigationIsOpen,
}: {
	requestInviteCta: I18nTextCta
	mobileNavigationIsOpen: boolean
	setMobileNavigationIsOpen: (mobileNavigationIsOpen: boolean) => void
}) => {
	// const [mobileNavigationIsOpen, setMobileNavigationIsOpen] = useState(false)
	return (
		<StyledHeader>
			<StyledContainer>
				<h1 style={{ margin: 0 }}>
					<NavLink
						to="/"
						style={{
							color: `white`,
							textDecoration: `none`,
						}}
					>
						<Logo fill={Colors.primary.darkBlue} />
					</NavLink>
				</h1>
				<Nav>
					<NavList>
						<NavItem>
							<NavLink title="Go to Home Page" to={`/`}>
								Home
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink title="Go to About us Page" to={`/about/`}>
								About
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink title="Go to Contact Page" to={`/contact/`}>
								Contact
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink title="Go to Blog Page" to={`/blog/`}>
								Blog
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink title="Go to Careers Page" to={`/careers/`}>
								Careers
							</NavLink>
						</NavItem>
					</NavList>
				</Nav>
				<StyledRequestInviteLink title={requestInviteCta.title.en} to={requestInviteCta.link}>
					<Button>{requestInviteCta.text.en}</Button>
				</StyledRequestInviteLink>
				<MobileNavigationButtonWrapper>
					<OpenMobileNavigationButton
						mobileNavigationIsOpen={mobileNavigationIsOpen}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						<HamburgerMenuIcon />
					</OpenMobileNavigationButton>
					<CloseMobileNavigationButton
						mobileNavigationIsOpen={mobileNavigationIsOpen}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						<CloseMenuIcon />
					</CloseMobileNavigationButton>
				</MobileNavigationButtonWrapper>
			</StyledContainer>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background: ${Colors.neutral.white};
	padding: 0.8rem 0;
	position: fixed;
	width: 100%;
	z-index: 30;
`
const StyledContainer = styled(Wrapper)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const Nav = styled.nav`
	display: none;
	@media screen and (min-width: 992px) {
		display: block;
		height: 100%;
	}
`
const NavList = styled.ul`
	@media screen and (min-width: 992px) {
		margin: 0;
		padding: 0;
		list-style-type: none;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: 1fr;
		grid-gap: 30px;
		justify-items: flex-start;
		height: 100%;
	}
`
const NavItem = styled.li`
	margin-bottom: 0;
	height: 100%;
	&:not(:last-of-type) {
		margin-right: 30px;
	}
`
const NavLink = styled(Link)`
	color: ${Colors.neutral.grayishBlue};
	text-decoration: none;
`
const StyledRequestInviteLink = styled(Link)`
	display: none;
	@media screen and (min-width: 992px) {
		display: block;
		text-align: left;
	}
`
const MobileNavigationButtonWrapper = styled.div`
	position: relative;
	width: 50px;
	height: 50px;
	@media screen and (min-width: 992px) {
		display: none;
	}
`
const OpenMobileNavigationButton = styled.button<{ mobileNavigationIsOpen: boolean }>`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	transform: ${props => (props.mobileNavigationIsOpen ? "translateY(-200%)" : "translateY(0)")};
	transition: transform 0.6s ease-out;
`
const CloseMobileNavigationButton = styled.button<{ mobileNavigationIsOpen: boolean }>`
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	transform: ${props => (props.mobileNavigationIsOpen ? "translateY(0)" : "translateY(-200%)")};
	transition: transform 0.6s ease-out;
`
