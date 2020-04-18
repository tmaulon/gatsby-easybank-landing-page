import { Link } from "gatsby"
import React from "react"
import { I18nString, I18nPicture, I18nTextCta } from "../utils/i18n"

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
	mockupsPicture: I18nPicture
	desktopBackgroundImage: I18nPicture
	mobileBackgroundImage: I18nPicture
	requestInviteCta: I18nTextCta
}) => (
	<section>
		<div>
			<h2>{sectionTitle.fr}</h2>
			<p>{sectionDescription.fr}</p>
			<a title={requestInviteCta.title.fr} href={requestInviteCta.link}>
				{requestInviteCta.text.fr}
			</a>
		</div>
	</section>
)
