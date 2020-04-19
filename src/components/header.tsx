import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Colors } from "../utils/colors"
import { Logo, HamburgerMenuIcon, CloseIcon } from "./common/icons"
import { Container, Wrapper } from "./container"
import { Button } from "./common/button"

export const Header = () => (
	<StyledHeader>
		<StyledContainer>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`,
					}}
				>
					<Logo fill={Colors.primary.darkBlue} />
				</Link>
			</h1>
			<button onClick={() => alert("open mobile menu")}>
				<HamburgerMenuIcon />
			</button>
		</StyledContainer>
	</StyledHeader>
)

const StyledHeader = styled.header`
	background: ${Colors.neutral.white};
	padding: 0.8rem 0;
	position: relative;
	z-index: 10;
`
const StyledContainer = styled(Wrapper)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
