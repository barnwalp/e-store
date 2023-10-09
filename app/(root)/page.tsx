import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="">
			<h1>Page</h1>
			<Button>Test</Button>
			{/*}<UserButton afterSignOutUrl="/" />{*/}
		</div>
	);
}
