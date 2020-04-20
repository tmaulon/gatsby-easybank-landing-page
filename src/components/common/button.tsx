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
	background-image: linear-gradient(90deg, ${Colors.primary.limeGreen}, ${Colors.primary.brightCyan});
	background-color: ${Colors.primary.limeGreen};
	box-shadow: 0 2px 40px 0 rgba(0, 0, 0, 0.05);
	border: none;
	border-radius: 50px;
	outline: 0;
	cursor: pointer;
	transition: background-color 0.3s linear;

	&:hover,
	&:focus,
	&:focus-within {
		background-image: linear-gradient(90deg, hsla(136, 65%, 51%, 0.5), hsla(192, 70%, 51%, 0.5));
		background-color: hsla(192, 70%, 51%, 0.5);
	}
`
