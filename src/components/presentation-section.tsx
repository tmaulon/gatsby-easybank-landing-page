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

export interface IPresentationSection {
	sectionTitle: I18nString
	sectionDescription: I18nString
	mockupsPicture: I18nFluidPicture
	desktopBackgroundImage: I18nFluidPicture
	mobileBackgroundImage: I18nFluidPicture
}
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
		<MockupsImageWrapper>
			<StyledMockupsImage fluid={mockupsPicture.src.childImageSharp.fluid} alt={mockupsPicture.alt.en} />
		</MockupsImageWrapper>
		<StyledContainer>
			<TextContentWrapper>
				<Title>{sectionTitle.en}</Title>
				<Text>{sectionDescription.en}</Text>
				<StyledRequestInviteLink title={requestInviteCta.title.en} href={requestInviteCta.link}>
					<Button>{requestInviteCta.text.en}</Button>
				</StyledRequestInviteLink>
			</TextContentWrapper>
		</StyledContainer>
	</StyledSection>
)
const StyledSection = styled.section`
	position: relative;
	margin-top: -60px;
	z-index: 10;
	padding-bottom: 100px;
	@media screen and (min-width: 768px) {
		margin-top: 0;
		padding: 186px 0 170px;
	}
`
const StyledContainer = styled(Wrapper)`
	position: relative;
	@media screen and (min-width: 768px) {
		display: flex;
		width: 100%;
	}
`
const TextContentWrapper = styled.div`
	@media screen and (min-width: 768px) {
		flex: 0 0 100%;
		max-width: 430px;
	}
`
const MockupsImageWrapper = styled.div`
	@media screen and (min-width: 768px) {
		display: block;
		max-width: 650px;
		position: absolute;
		top: -105px;
		right: -320px;
		width: 100%;
	}
	@media screen and (min-width: 992px) {
		right: -110px;
	}
`
const StyledMockupsImage = styled(Img)`
	top: -50px;
	margin: 0;

	& img {
		margin: 0;
	}
	@media screen and (min-width: 768px) {
		top: 0;
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
	top: -190px;
	right: -370px;
	display: none;
	@media screen and (min-width: 768px) {
		display: block;
		width: 100%;
		height: 848px;
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
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const Text = styled.p`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.main};
	text-align: center;
	color: ${Colors.neutral.grayishBlue};
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const StyledRequestInviteLink = styled.a`
	display: block;
	text-align: center;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
