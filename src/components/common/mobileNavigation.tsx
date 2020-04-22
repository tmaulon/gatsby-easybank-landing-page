import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Colors } from "../../utils/colors"
// import { Logo, HamburgerMenuIcon, CloseIcon, CloseMenuIcon } from "./common/icons"
// import { Container, Wrapper } from "./container"
// import { Button } from "./common/button"
// import { I18nTextCta } from "../utils/i18n"

export const MobileNavigation = ({
	mobileNavigationIsOpen,
	setMobileNavigationIsOpen,
}: {
	mobileNavigationIsOpen: boolean
	setMobileNavigationIsOpen: (mobileNavigationIsOpen: boolean) => void
}) => {
	return (
		<MobileNav mobileNavigationIsOpen={mobileNavigationIsOpen}>
			<MobileNavList mobileNavigationIsOpen={mobileNavigationIsOpen}>
				<MobileNavItem>
					<MobileNavLink
						title="Go to Home Page"
						to={`/`}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						Home
					</MobileNavLink>
				</MobileNavItem>
				<MobileNavItem>
					<MobileNavLink
						title="Go to About us Page"
						to={`/about/`}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						About
					</MobileNavLink>
				</MobileNavItem>
				<MobileNavItem>
					<MobileNavLink
						title="Go to Contact Page"
						to={`/contact/`}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						Contact
					</MobileNavLink>
				</MobileNavItem>
				<MobileNavItem>
					<MobileNavLink
						title="Go to Blog Page"
						to={`/blog/`}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						Blog
					</MobileNavLink>
				</MobileNavItem>
				<MobileNavItem>
					<MobileNavLink
						title="Go to Careers Page"
						to={`/careers/`}
						onClick={() => setMobileNavigationIsOpen(!mobileNavigationIsOpen)}
					>
						Careers
					</MobileNavLink>
				</MobileNavItem>
			</MobileNavList>
		</MobileNav>
	)
}

const MobileNav = styled.nav<{ mobileNavigationIsOpen: boolean }>`
	background: linear-gradient(hsla(233, 26%, 24%, 0.6), hsla(233, 26%, 24%, 0.2));
	position: fixed;
	z-index: 20;
	top: 0px;
	padding-top: 100px;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	min-height: 100vh;
	display: block;
	opacity: ${props => (props.mobileNavigationIsOpen ? "1" : "0")};
	transform: ${props => (props.mobileNavigationIsOpen ? "translateX(0)" : "translateX(-100%)")};
	transition: ${props =>
		props.mobileNavigationIsOpen
			? "transform 0.3s ease-out, opacity 0.6s ease-out"
			: "transform 0.3s ease-out, opacity 0.6s ease-out"};

	transition-delay: ${props => (props.mobileNavigationIsOpen ? "0s" : "0.6s")};
	@media screen and (min-width: 992px) {
		display: none;
	}
`
const MobileNavList = styled.ul<{ mobileNavigationIsOpen: boolean }>`
	background-color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	max-width: 80%;
	margin: 0 auto;
	padding: 15px 0;
	transform: ${props => (props.mobileNavigationIsOpen ? "translateX(0)" : "translateX(-200%)")};
	transition-delay: ${props => (props.mobileNavigationIsOpen ? "0s" : "0.3s")};
	transition: transform 0.6s ease-out;
	transition-delay: 0.3s;
	@media screen and (min-width: 992px) {
		display: none;
	}
`
const MobileNavItem = styled.li`
	display: block;
	height: 100%;
	padding: 0;
	margin: 0;
	@media screen and (min-width: 992px) {
		display: none;
	}
`
const MobileNavLink = styled(Link)`
	display: block;
	height: 100%;
	padding: 15px 0;
	text-decoration: none;
	color: ${Colors.primary.darkBlue};
	@media screen and (min-width: 992px) {
		display: none;
	}
`
