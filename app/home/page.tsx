import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
	return (
		<div>
			<h1>Page</h1>
			<Button>Test</Button>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
