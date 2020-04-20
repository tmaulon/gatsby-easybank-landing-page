/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.createSchemaCustomization = ({ actions }) => {
// 	const { createTypes } = actions
// 	const typeDefs = [
// 		`
// 		type DataJsonHomePageTheReasonsWhySectionTheReasonsWhy implements Node {
// 			reason: ReasonsWhyJson
// 		}
// 		type dataJson implements Node {
// 		theReasonsWhy: [DataJsonHomePageTheReasonsWhySectionTheReasonsWhy]
// 		}
// 		`,
// 	]
// 	createTypes(typeDefs)
// }

// exports.createResolvers = ({ createResolvers }) => {
// 	const resolvers = {
// 		dataJson: {
// 			theReasonsWhy: {
// 				resolve: (source, args, context, info) => {
// 					if (!source.theReasonsWhy) {
// 						return undefined
// 					}
// 					return source.theReasonsWhy.map(reasonItem => {
// 						const matchingReason = context.nodeModel
// 							.getAllNodes({ type: "ReasonsWhyJson" })
// 							.find(reason => reason.id === reasonItem.reason)
// 						console.log("matching reasos : ", matchingReason)

// 						return { matchingReason }
// 					})
// 				},
// 			},
// 		},
// 	}
// 	createResolvers(resolvers)
// }
