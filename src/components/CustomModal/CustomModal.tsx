import { ReactNode, useCallback, useEffect, useState } from 'react';

interface ICustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  isMobile?: boolean;
  title?: string;
  className?: string;
}

const CustomModal = ({ isOpen, isMobile = true, className = '', onClose, children }: ICustomModalProps) => {
  const [show, setShow] = useState(isOpen);

  const handleOnClose = useCallback(() => {
    onClose();
    document.body.style.overflow = '';
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = 'hidden';
    } else {
      // Wait for animation before unmounting
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleOnClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleOnClose]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${className} ${isOpen ? 'opacity-100' : 'opacity-0'}`}
    >
      <div
        className={`relative z-10 flex h-full w-full transform flex-col bg-dark bg-opacity-90 transition-transform duration-300 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        <div className={`flex flex-shrink-0 items-center justify-end ${isMobile ? 'p-2' : 'p-6'}`}>
          <button
            onClick={handleOnClose}
            className='flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-transparent text-4xl text-white transition-colors duration-200 hover:border-myBlue hover:text-myBlue focus:outline-none'
          >
            <span>&times;</span>
          </button>
        </div>
        <div className='relative flex flex-1 flex-col items-center justify-center'>{children}</div>
      </div>
    </div>
  );
};

export default CustomModal;
