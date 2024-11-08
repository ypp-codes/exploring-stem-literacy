import React from 'react'
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'

interface ModalProps {
	children?: React.ReactNode;
	setOpen?: (val: boolean) => void;
	open?: boolean;
}

export default function Modal(props: ModalProps) {

	return (
		<Dialog open={props.open} onClose={props.setOpen} className="relative z-10">
			<DialogBackdrop
				transition
				className="fixed inset-0 bg-slate-500 bg-opacity-50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
			/>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<DialogPanel
						transition
						className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
					>
						{props.children}
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	)
}
