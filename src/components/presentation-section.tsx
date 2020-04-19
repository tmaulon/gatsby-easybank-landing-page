import { Link } from "gatsby"
import React from "react"
import { I18nString, I18nTextCta, I18nFluidPicture } from "../utils/i18n"
import { Wrapper } from "./container"
import Img from "gatsby-image"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { Typography } from "../utils/typography"
import { Colors } from "../utils/colors"
import { Button } from "./common/button"

export const PresentationSection = ({
	sectionTitle,
	sectionDescription,
	mockupsPicture,
	desktopBackgroundImage,
	mobileBackgroundImage,
	requestInviteCta,
}: {
	sectionTitle: I18nString
	sectionDescription: I18nString
	mockupsPicture: I18nFluidPicture
	desktopBackgroundImage: I18nFluidPicture
	mobileBackgroundImage: I18nFluidPicture
	requestInviteCta: I18nTextCta
}) => (
	<StyledSection>
		<MobileBackgroundImage
			Tag="div"
			fluid={mobileBackgroundImage.src.childImageSharp.fluid}
			backgroundColor={`transparent`}
			style={{
				// Defaults are overwrite-able by setting one or each of the following:
				backgroundSize: "contain",
				backgroundPosition: "top right",
				backgroundRepeat: "no-repeat",
				position: "absolute",
			}}
		/>
		<DesktopBackgroundImage
			Tag="div"
			fluid={desktopBackgroundImage.src.childImageSharp.fluid}
			backgroundColor={`transparent`}
			style={{
				// Defaults are overwrite-able by setting one or each of the following:
				backgroundSize: "contain",
				backgroundPosition: "top right",
				backgroundRepeat: "no-repeat",
				position: "absolute",
			}}
		/>
		<StyledContainer>
			<StyledMockupsImage fluid={mockupsPicture.src.childImageSharp.fluid} alt={mockupsPicture.alt.en} />
			<Title>{sectionTitle.en}</Title>
			<Text>{sectionDescription.en}</Text>
			<StyledLink title={requestInviteCta.title.en} to={requestInviteCta.link}>
				<Button>{requestInviteCta.text.en}</Button>
			</StyledLink>
		</StyledContainer>
	</StyledSection>
)
const StyledSection = styled.section`
	position: relative;
	margin-top: -60px;
	z-index: 0;
	padding-bottom: 100px;
`
const StyledContainer = styled(Wrapper)`
	position: relative;
`
const StyledMockupsImage = styled(Img)`
	top: -50px;
	margin: 0;

	& img {
		margin: 0;
	}
`
const MobileBackgroundImage = styled(BackgroundImage)`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	min-height: 100%;
	background-position: top right;
	background-repeat: no-repeat;
	background-size: contain;
	@media screen and (min-width: 768px) {
		display: none;
	}
`
const DesktopBackgroundImage = styled(BackgroundImage)`
	position: absolute;
	top: 0;
	right: 0;
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
		width: 100%;
		background-position: top right;
		background-repeat: no-repeat;
		background-size: contain;
	}
`
const Title = styled.h2`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.mainTitle};
	line-height: 2.6rem;
	text-align: center;
	color: ${Colors.primary.darkBlue};
	margin: 0 0 20px;
`
const Text = styled.p`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.main};
	text-align: center;
	color: ${Colors.neutral.grayishBlue};
`
const StyledLink = styled(Link)`
	display: block;
	text-align: center;
`
