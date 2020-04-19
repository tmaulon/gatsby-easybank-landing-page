import { FluidObject, FixedObject } from "gatsby-image"

export interface IFluidSharpImageSource {
	childImageSharp: {
		fluid: FluidObject | FluidObject[]
	}
}

export interface IFixedSharpImageSource {
	childImageSharp: {
		fixed: FixedObject | FixedObject[]
	}
}

export type ImageSource = string | IFluidSharpImageSource | IFixedSharpImageSource
