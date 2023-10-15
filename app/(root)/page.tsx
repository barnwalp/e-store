"use client"

import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";
	
export default function Page() {
	const isOpen = useStoreModal((state) => state.isOpen);
	const onOpen = useStoreModal((state) => state.onOpen);

	useEffect(() => {
		if(!isOpen) {
			onOpen();
		}
	}, [isOpen, onOpen]);
	return (
		<div className="">
			<h1>Root Page</h1>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
