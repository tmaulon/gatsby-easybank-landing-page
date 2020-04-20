/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Header } from "./header"
import { Footer } from "./footer"
import styled from "styled-components"
import { Colors } from "../utils/colors"

export const Layout = ({ children }: { children: ReactNode }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header />
			<StyledMain>{children}</StyledMain>
			<Footer />
		</>
	)
}
const StyledMain = styled.main`
	background-color: ${Colors.neutral.veryLightGray};
	overflow: hidden;
`
