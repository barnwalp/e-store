"use client"

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"

type DialogModalProps = {
	title: string;
	description: string;
}

export const DialogModal = (props: DialogModalProps):React.JSX.Element => {
	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button>Create Store</Button>
				</DialogTrigger>
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
