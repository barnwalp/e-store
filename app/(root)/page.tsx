import { Button, buttonVariants } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from 'next/link'


export default function Home() {
	return (
		<div className="ml-6 mt-4">
			<h1>Root Page</h1>
			<Button variant="default">Keep Practicing</Button>
			<Link className={buttonVariants({variant: 'outline'})}  href="#">Click Here</Link>
			<UserButton afterSignOutUrl="/" />
		</div>
	)
}
