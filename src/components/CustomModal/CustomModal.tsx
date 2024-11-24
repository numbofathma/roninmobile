import React, { ReactNode, useEffect } from 'react';

interface ICustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const CustomModal: React.FC<ICustomModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='fixed inset-0 flex flex-col bg-white bg-opacity-90'>
        <div className='flex flex-shrink-0 items-center justify-end px-2'>
          <button onClick={onClose} className='cursor-pointer text-2xl text-dark hover:text-myBlue focus:outline-none md:text-4xl'>
            &times;
          </button>
        </div>
        <div className='relative m-[2%] flex-1'>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
