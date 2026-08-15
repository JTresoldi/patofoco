import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function Modal({ open, onClose, title, children, className = "" }) {
    if (!open) return null;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className={`w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl ${className}`}>
                    {title && (
                        <DialogTitle className="mb-4 text-xl font-semibold">
                            {title}
                        </DialogTitle>
                    )}
                    {children}
                </DialogPanel>
            </div>
        </Dialog>
    )
}