import { createContext, useContext } from "react";


export const InfoContext = createContext()
export const useInfoContext = () => {
	const context = useContext(InfoContext)
	if(context === undefined) {
		throw new Error('useInfoContext must be used within a InfoContext.Provider')
	}
	return context
}