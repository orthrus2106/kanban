import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import type { ReactNode } from 'react';

type BaseModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

const BaseModal = ({ isOpen, onClose, title, children }: BaseModalProps) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
          {title && (
            <DialogTitle className="text-lg font-semibold text-slate-900">
              {title}
            </DialogTitle>
          )}

          <div className="mt-4">{children}</div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default BaseModal;
