export const FormatDate = (dateUnformated: number) =>{
	const newDate = new Date( dateUnformated )
		newDate.toLocaleTimeString
	return  newDate.toLocaleDateString().concat(` - ${newDate.toLocaleTimeString()}` )
}