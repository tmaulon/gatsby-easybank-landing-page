import React from "react"
import { I18nString } from "../utils/i18n"
import { Typography } from "../utils/typography"
import { Colors } from "../utils/colors"
import styled from "styled-components"
import { Wrapper } from "./container"
import { IAllBlogPostsJson } from "../pages/index"
import Img from "gatsby-image"

export const BlogSection = ({
	sectionTitle,
	allBlogPostsJson,
}: {
	sectionTitle: I18nString
	allBlogPostsJson: IAllBlogPostsJson
}) => (
	<StyledSection>
		<StyledContainer>
			<Title>{sectionTitle.en}</Title>
			<PostsList>
				{allBlogPostsJson.edges.map(({ node: post }, index) => (
					<Post key={`${post.id}-${index}`}>
						<PostThumbnailWrapper>
							<PostThumbnail fluid={post.picture.src.childImageSharp.fluid} alt={post.picture.alt.en} />
						</PostThumbnailWrapper>
						<PostContent>
							<PostAuthor>By {post.author}</PostAuthor>
							<PostTitle>{post.title.en}</PostTitle>
							<PostDescription>{post.description.en}</PostDescription>
						</PostContent>
					</Post>
				))}
			</PostsList>
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
	margin: 0 0 35px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const PostsList = styled.ul`
	list-style-type: none;
	display: grid;
	grid-template-columns: minmax(1fr, 325px);
	grid-template-rows: repeat(auto, 1fr);
	padding: 0;
	margin: 0;
	grid-gap: 40px;
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
`
const Post = styled.li`
	grid-column: span 1;
	grid-row: span 1;
	text-align: center;
	padding: 0;
	margin: 0;
	background-color: ${Colors.neutral.white};
	border-radius: 10px;
	overflow: hidden;
`
const PostThumbnailWrapper = styled.div`
	/* 325*200 */
	width: 100%;
	overflow: hidden;
	margin: 0 0 20px;
`
const PostThumbnail = styled(Img)`
	min-height: 200px;

	/* @media screen and (min-width: 768px) {
		margin: 0 0 30px;
	} */
`
const PostContent = styled.div`
	padding: 30px 28px 40px;
`
const PostAuthor = styled.h5`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.legend};
	text-align: left;
	color: ${Colors.neutral.grayishBlue};
	margin: 0 0 10px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const PostTitle = styled.h4`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.postTitles};
	text-align: left;
	color: ${Colors.primary.darkBlue};
	margin: 0 0 20px;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
const PostDescription = styled.p`
	font-family: ${Typography.fontFamily.mainSansSerif};
	font-weight: ${Typography.fontWeight.regular};
	font-size: ${Typography.fontSize.main};
	text-align: left;
	color: ${Colors.neutral.grayishBlue};
	margin: 0 0 40px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	@media screen and (min-width: 768px) {
		text-align: left;
	}
`
