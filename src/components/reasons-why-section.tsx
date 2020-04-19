import React from "react"
import { I18nString } from "../utils/i18n"
import { Typography } from "../utils/typography"
import { Colors } from "../utils/colors"
import styled from "styled-components"
import { Wrapper } from "./container"

export const ReasonsWhySection = ({
	sectionTitle,
	sectionDescription,
	theReasonsWhy,
}: {
	sectionTitle: I18nString
	sectionDescription: I18nString
	theReasonsWhy: string[]
}) => (
	<StyledSection>
		<StyledContainer>
			<Title>{sectionTitle.en}</Title>
			<Text>{sectionDescription.en}</Text>
			<ul>
				{theReasonsWhy.map((r, index) => {
					return (
						<li key={`${r}-${index}`}>
							<p>{r}</p>
						</li>
					)
				})}
			</ul>
		</StyledContainer>
	</StyledSection>
)
const StyledSection = styled.section`
	position: relative;
	z-index: 0;
	padding: 100px 0;
	background-color: ${Colors.neutral.veryLightGray};
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
`
const Text = styled.p`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.main};
	text-align: center;
	color: ${Colors.neutral.grayishBlue};
`
