"use client"

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
	
export default function Page() {
	return (
		<div className="">
			<h1>Root Page</h1>
			<UserButton afterSignOutUrl="/" />
			<Modal 
				title="test" 
				description="description"
				isOpen={true}
				onClose={() => {}}
			>
				I am a children component
			</Modal>
		</div>
	);
}
