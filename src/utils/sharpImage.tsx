import { FluidObject, FixedObject } from "gatsby-image"

export interface FluidSharpImage {
	childImageSharp: {
		fluid: FluidObject | FluidObject[]
	}
}

export interface FixedSharpImage {
	childImageSharp: {
		fixed: FixedObject | FixedObject[]
	}
}

export type ImageSource = string | FluidSharpImage | FixedSharpImage
