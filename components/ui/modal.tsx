"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

type StoreModalProps = {
	title: string;
	description: string;
}

export const StoreModal = (props: StoreModalProps):React.JSX.Element => {
	return (
		<>
			<Dialog>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>{props.title}</DialogTitle>
						<DialogDescription>
							{props.description}
						</DialogDescription>
					</DialogHeader>
					<DialogFooter className="sm:justify-start">
						<DialogClose asChild>
							<Button type="button" variant="default">
								Continue
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
