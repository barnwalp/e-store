import { 
	Dialog, 
	DialogTitle, 
	DialogHeader,
	DialogContent, 
	DialogDescription, 
} from "@/components/ui/dialog";

interface ModalProps {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
	title, 
	description,
	isOpen,
	onClose,
	children
}) => {
	const onChange = ((open: boolean) => {
		if(!open) {
			onClose();
		}
	})
	return (
		// isOpen and onOpenChange are defined in the radix ui
		// in DialogProps
		<Dialog open={isOpen} onOpenChange={onChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>
						{description}
					</DialogDescription>
				</DialogHeader>
				<div>
					{children}
				</div>
			</DialogContent>
		</Dialog>
	)
}
