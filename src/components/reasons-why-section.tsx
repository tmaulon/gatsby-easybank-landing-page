import React from "react"
import { I18nString } from "../utils/i18n"
import { Typography } from "../utils/typography"
import { Colors } from "../utils/colors"
import styled from "styled-components"
import { Wrapper } from "./container"
import { IReasonsWhyEdges } from "../pages/index"
import Img from "gatsby-image"

export const ReasonsWhySection = ({
	sectionTitle,
	sectionDescription,
	allReasonsWhyJson,
}: {
	sectionTitle: I18nString
	sectionDescription: I18nString
	allReasonsWhyJson: IReasonsWhyEdges
}) => (
	<StyledSection>
		<StyledContainer>
			<Title>{sectionTitle.en}</Title>
			<Text dangerouslySetInnerHTML={{ __html: sectionDescription.en }} />
			<ReasonsList>
				{allReasonsWhyJson.edges.map(({ node: reason }, index) => (
					<Reason key={`${reason.id}-${index}`}>
						<ReasonIcon fluid={reason.picture.src.childImageSharp.fluid} alt={reason.picture.alt.en} />
						<ReasonTitle>{reason.title.en}</ReasonTitle>
						<ReasonDescription>{reason.description.en}</ReasonDescription>
					</Reason>
				))}
			</ReasonsList>
		</StyledContainer>
	</StyledSection>
)
const StyledSection = styled.section`
	position: relative;
	z-index: 0;
	padding: 100px 0;
	background-color: ${Colors.neutral.lightGrayishBlue};
`
const StyledContainer = styled(Wrapper)`
	position: relative;
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
	margin-bottom: 60px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const ReasonsList = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(auto, 1fr);
	padding: 0;
	margin: 0;
	grid-gap: 40px;
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`
const Reason = styled.li`
	grid-column: span 1;
	grid-row: span 1;
	text-align: center;
	padding: 0;
	margin: 0;
`
const ReasonIcon = styled(Img)`
	max-width: 75px;
	height: auto;
	margin: 0 auto 30px;

	@media screen and (min-width: 768px) {
		margin: 0 0 30px;
	}
`
const ReasonTitle = styled.h3`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.subtitles};
	text-align: center;
	color: ${Colors.primary.darkBlue};
	margin: 0 auto 20px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const ReasonDescription = styled.p`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.main};
	text-align: center;
	color: ${Colors.neutral.grayishBlue};
	margin: 0 auto 40px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
