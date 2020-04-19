import React, { ReactNode } from "react"
import styled from "styled-components"
import { Typography } from "../../utils/typography"
import { Colors } from "../../utils/colors"

export const Button = ({ children }: { children: ReactNode }) => <StyledButton>{children}</StyledButton>
export const StyledButton = styled.button`
	padding: 10px 20px;
	appearance: none;
	white-space: nowrap;
	overflow: hidden;
	position: relative;
	text-align: center;
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.bold};
	font-size: ${Typography.fontSize.main};
	color: ${Colors.neutral.white};
	background: linear-gradient(90deg, ${Colors.primary.limeGreen}, ${Colors.primary.brightCyan});
	box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 50px;
	transition-duration: 0.3s;
	transition-timing-function: linear;
	outline: 0;
	cursor: pointer;
	transition-property: color, background-color;

	&:hover,
	&:focus,
	&:focus-within {
		color: ${Colors.neutral.white};
		background: linear-gradient(${Colors.primary.limeGreen}, ${Colors.primary.brightCyan});
	}
`
