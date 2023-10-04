import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
	return (
		<div>
			<h1>Page</h1>
			<Button>Test</Button>
			<UserButton afterSignOutUrl="/" />
		</div>
	);
}
