import { Button, buttonVariants } from "@/components/ui/button";
import { DialogModal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link'
import { useStore } from "zustand";

export default function Home() {
	const bears: { bears: number } = useStore((state) => state.bears)
	return (
		<div className="ml-6 mt-4">
			<h1>Root Page</h1>
			<Button variant="default">Keep Practicing</Button>
			<Link className={buttonVariants({variant: 'outline'})}  href="#">Click Here</Link>
			<UserButton afterSignOutUrl="/" />
			<DialogModal title="E Commerce Store" description="Best Store in the World" />
			<h3>{ bears } around here</h3>
		</div>
	)
}
