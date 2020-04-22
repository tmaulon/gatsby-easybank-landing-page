export const capitalisePageName = (string: string) => {
	if (string.indexOf("-") !== -1) {
		return string
			.split("-")
			.map(i => i[0].toUpperCase() + i.slice(1))
			.join(" ")
	} else {
		return string[0].toUpperCase() + string.slice(1)
	}
}
