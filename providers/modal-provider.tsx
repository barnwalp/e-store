"use client"

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react"

// this modal provider will be used in app/layout.tsx, but
// layout.tsx is a server component so we can not directly
// use client components there
export const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);
	
	// this will ensure that only when client side has run
	// <StoreModal> is returned untill then only null is 
	// returned. This is to avoid hydration error
	useEffect(() => {
		setIsMounted(true);
	}, [])

	if(!isMounted) {
		return null;
	}
	return (
		<>
			<StoreModal />
		</>
	)
}
