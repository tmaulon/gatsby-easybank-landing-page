import { ImageSource, IFluidSharpImageSource, IFixedSharpImageSource } from "./sharpImage"

export type Locale = "fr" | "en"

export type I18nString = { fr: string; en: string }

export interface I18nPageMetaData {
	metaTitle: I18nString
	metaDescription: I18nString
	keywords: I18nString
}
export interface I18nMedia {
	src: string
	alt: {
		fr: string
		en: string
	}
}
export interface I18nPicture {
	src: string
	alt: {
		fr: string
		en: string
	}
}
export interface I18nFluidPicture {
	src: IFluidSharpImageSource
	alt: {
		fr: string
		en: string
	}
}
export interface I18nFixedPicture {
	src: IFixedSharpImageSource
	alt: {
		fr: string
		en: string
	}
}
export interface I18nTextCta {
	text: I18nString
	title: I18nString
	link: string
}
